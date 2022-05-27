const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RestaurantSchema = new Schema({
    address : {
        building : {
            type : Number
        },
        street : {
            type : String
        }
    },
    cuisine : {
        type : String
    },
    grades : {
        type: Array
    },
    name : {
        type: String
    },
    restaurant_id : {
        type : Number
    }
})

const Restaurants = mongoose.model("Restaurants", RestaurantSchema);
module.exports = Restaurants;