const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 3000;
const url = "mongodb+srv://Dishant:qFQIPigkZccFGkp3@cluster0.hikpg.mongodb.net/restaurants?retryWrites=true&w=majority";

app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());



const mongoose = require('mongoose');
const connectionParams={
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true 
}
mongoose.connect(url, connectionParams).then(()=>{
    console.log("Mongodb Database connected.");
},
err =>{
    console.log("Error connecting Database instance due to:", err);
})



app.get('/', (req, res) => {
    res.send("Hello World!");
})

const link = `http://localhost:${PORT}`;

app.listen(PORT, ()=> {
    console.log(`Go to ${link}`);
})

const Router = require('./api/routes/Routes');
app.use('/', Router);


