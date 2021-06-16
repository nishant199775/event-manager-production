const express=require('express');
const passport=require('passport');
const router=express.Router();
const tokenController=require('../../../controllers/tokenController');

router.post('/create',passport.authenticate('jwt',{session:false}),tokenController.create)
router.post('/markAttendance',passport.authenticate('jwt',{session:false}),tokenController.authToken)
router.get('/showJoinedEventsWithToken',passport.authenticate('jwt',{session:false}),tokenController.showJoinedEventsWithToken)
router.post('/showDetails',passport.authenticate('jwt',{session:false}),tokenController.showDetails)
router.get('/registrants/recent',passport.authenticate('jwt',{session:false}),tokenController.recentRegistrants);
module.exports=router;