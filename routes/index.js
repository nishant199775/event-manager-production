const express=require('express');
const router=express.Router();
const homeController=require('../controllers/homeController')
router.use('/api',require('./api/index'));
router.get('/',homeController.home);

module.exports=router;