
const express = require('express');
require('dotenv').config();


require('dotenv');

const mongoConnect= require('./util/database');

mongoConnect()




port = process.env.PORT || 5555;
const {

    NODE_ENV= 'development',
    SESS_NAME= 'sid',
    SESS_SECRET='keyboard dog',
    SESS_LIFETIME= 1000*60*60*25
}=process.env

const IN_PROD = NODE_ENV === 'production'



const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));











const loanRoutes = require('./routes/loantransactions');

app.use(loanRoutes);








app.listen(port, () => {
    console.log(`mobile app listening at http://localhost:${port}`);


})



