const express = require('express');
const Controller = require('./controller');
const Portroutes = express.Router();

Portroutes.post('/createdata', Controller.createData);
Portroutes.get('/fetchdata', Controller.fetchData);

module.exports=Portroutes;