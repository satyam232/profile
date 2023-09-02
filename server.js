const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const Portroutes = require('./Routes');
require('dotenv').config();


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan('dev'));
app.use(cors()); 

mongoose.connect(process.env.MONGODB_CONNECT_URI)
.then(() => {
console.log('MongoDB is connected');
}).catch((error) => {
console.error('MongoDB connection error:', error);
})

app.use('/port',Portroutes);


const PORT=process.env.PORT;

app.listen(PORT,()=>{
    console.log(`server is running in the port ${PORT}`)
})