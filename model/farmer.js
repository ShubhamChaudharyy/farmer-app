const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const FarmerSchema=new Schema({
	FirstName:{
              type:String
           
	},
	MobileNumber:{
              type:String
              
	},
	Surname:{
              type:String
             
	},
	Region:{
              type:String
             
	},
	Address:{
              type:String
            
    },
    Crops:[{
		
		type:String
		
	}],
	
 gender:{
	type:String
  
},
complain:[{
	Subject:{
		type:String
	},
	Detail:{
		type:String
	}
}],
ResolvedProblems:[{
	Subject:{
		type:String
	},
	Detail:{
		type:String
	}
}]
});
module.exports=mongoose.model('FarmerInfo',FarmerSchema);

