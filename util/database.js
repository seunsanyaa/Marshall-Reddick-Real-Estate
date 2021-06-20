const mongodb= require('mongodb');
const mongoose = require("mongoose");
const URI =process.env.MONGODB_URI ||'mongodb+srv://seunsanyaa:Z6hTDvWZiLUlUtGZ@marshall-reddick-real-e.zgp5w.mongodb.net/Loans?retryWrites=true&w=majority'
function mongoConnect(){

    mongoose.connect(URI)
        .then(client => {
            console.log('Connected!');


        }).catch(err => {
        console.log(err);
    });
}

module.exports=mongoConnect;

