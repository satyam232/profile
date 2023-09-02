const { Schema , model} = require("mongoose");

const portfolioData = new Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    message:{type:String,required:true}
})

const PortFolioModel=model('portfolioData',portfolioData);
module.exports =PortFolioModel;