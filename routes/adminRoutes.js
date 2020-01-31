var app=require('express')()
const router=require('express').Router()
const Farmer=require('../model/farmer')
const controllers=require('../controller/admin') 
const multer=require('multer')
const path=require('path')


const storage=multer.diskStorage(
    {
        destination: function(req,file,cb)
        {
            cb(null, path.join(__dirname, '../uploads/'))
        },
        filename: function(req,file,cb)
        {
            cb(null, file.originalname)
        }


    }
)
const upload=multer({storage:storage})



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
router.post('/submitproblem',upload.single('image'),controllers.postProblem)




module.exports=router