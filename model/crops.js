const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const CropSchema=new Schema({
	Crops:[{
        Type:{
        type:String
        },
        Name:{
             type:String,
        },
        FavourableCondition:{
        type:String
        },
        temperatureSuitable:
        {
          type:Number
        },
      }],
      city:{
          type:String
      }
    })
    
module.exports=mongoose.model('CropInfo',CropSchema);

