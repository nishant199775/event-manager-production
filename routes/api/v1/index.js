const express=require('express');
const router=express.Router();


router.use('/users',require('./users'));
router.use('/events',require('./events'))
router.use('/token',require('./token'));

module.exports=router;