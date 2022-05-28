const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const SALT_FACTOR = 10;

const UserSchema = new Schema({
    username: {
        type: String
    },
    password: {
        type: String
    }
})

UserSchema.pre('save', function(next){
    const user = this;
    if(!user.isModified('password')) return next();
    bcrypt.genSalt(SALT_FACTOR, (err, salt)=>{
        if(err) return next(err);
        bcrypt.hash(user.password, salt, ()=>{
            if(err) return next;
            user.password = hash;
            next();
        });
    });
});

const User = mongoose.model("User", UserSchema);

module.exports = User;