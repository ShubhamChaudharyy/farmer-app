const Farmer=require('../model/farmer')
const axios=require('axios')
var app=require('express')()
var express=require('express')
var path=require('path')
var messagebird=require('messagebird')('Jv7vEMVoiYMcE8llCYrsKqtQB')
const cors=require('cors')
const CropInfo=require('../model/crops')
const FarmerInfo=require('../model/farmer')


var bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));

exports.getCitydata=(req,res,next)=>{
    axios.get('https://indian-cities-api-nocbegfhqg.now.sh/cities').then(response=>{
      for(i=0;i<response.data.length;i++)
      {
          const city=response.data[i].District;
          const newcity=new CropInfo({city})
          newcity.save()
      }
      console.log('saved')
    }).catch(err=>{
        res.send(err)
    })
}
exports.getHomepage=(req,res,next)=>{

  res.render('index');   
}
exports.getAdminpage=(req,res,next)=>{

  
    res.render('admin');   
}
exports.getLoginpage=(req,res,next)=>{

  
    res.render('login');   
}
exports.getRegister=(req,res,next)=>{
CropInfo.find().then(data=>{
    res.render('register',{
        err:false,
        id:false,
        tel:false,
        data:data
    });
})
    
}
exports.getProblemForm=(req,res,next)=>{
   
}
exports.postLogin=(req,res,next)=>{
    const MobileNumber=req.body.phonenumber;
    
   
    FarmerInfo.findOne({MobileNumber:MobileNumber}).then(farmerdata=>{
       if(farmerdata)
       {
       Region=farmerdata.Region;
       console.log(Region)
       axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${Region}&appid=837ba492141786a028936c9eac4f4c61`).then(response=>{
    
       res.render('admin',{
            data:farmerdata,
            response
        })
    })
        .catch(err=>{
console.log(err)
       })
       

    }
       else{
           res.render('login',{
               err:"user didnt Registered Yet"
           })
       }
       
       
    
    
}).catch(err=>{
    console.log(err)
})
}
    

exports.postRegister=(req,res,next)=>{
 
    
    const MobileNumber=req.body.number;
   
    const FirstName=req.body.Name;
    const Region=req.body.cityname;
    const Address=req.body.Address;
    const farmer=new FarmerInfo({FirstName,Region,Address,MobileNumber})
    
    farmer.save()
    const id=farmer.id;
        
  
    
    axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${Region}&appid=837ba492141786a028936c9eac4f4c61`).then(response=>{
        res.render('admin',{
            data:farmer,
            response
        })

   
  
 }
)}

exports.getCrops=(req,res,next)=>{
  
}
exports.postProblem=(req,res,next)=>{

}