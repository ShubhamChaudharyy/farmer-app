var app=require('express')()
const router=require('express').Router()
const Farmer=require('../model/farmer')
const controllers=require('../controller/admin') 


router.get('/',controllers.getHomepage)
router.get('/gethomepage',controllers.getHomepage)
router.get('/addProblem/:id',controllers.getProblemForm)
router.get('/admin',controllers.getAdminpage)
router.get('/login',controllers.getLoginpage)
router.get('/register',controllers.getRegister)
router.post('/postLogin',controllers.postLogin)
router.post('/postRegister',controllers.postRegister)
router.get('/cropinfo',controllers.getCrops)
router.get('/cityData',controllers.getCitydata)




module.exports=router