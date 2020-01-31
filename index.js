var app=require('express')()
var express=require('express')
var mongoose=require('mongoose')
const port=process.env.PORT||5000
const path=require('path')
const uri=process.env.ATLAS_URI
const routes=require('./routes/adminRoutes')
require('dotenv').config({path:'.env'});
var bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");

mongoose.connect("mongodb+srv://shubhamchoudhary:9910@cluster0-ze2sl.mongodb.net/test?retryWrites=true&w=majority",{useNewUrlParser:true})
const connection=mongoose.connection
connection.once('open',()=>{
    console.log("mongoose database connected successfully")
})
app.set('views',path.join(__dirname,'/views/landing Page'))
app.use(express.static(__dirname +'/views/landing Page'))


app.listen(port,()=>{
   console.log(`Server Running ${port}`)
})
app.use(routes)



