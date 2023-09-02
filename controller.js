const PortFolioModel = require("./portfolioData");


const Controller={
    createData: async function(req,res){
        try{
            const createdData=req.body;
            const newData=new PortFolioModel(createdData);
            const saveData=await newData.save();
            return res.json({sucess:true,data:saveData,message:"message sent"})
        }
        catch(err){
            return res.json({sucess:false,message:err})
        }

    },
    fetchData: async function(req,res){
        try{
            const allData=await PortFolioModel.find();
            return res.json({sucess:true,data:allData});
        }
        catch(err){
            res.json({sucess:false,message:err});
        }
    }
   
};

module.exports=Controller;