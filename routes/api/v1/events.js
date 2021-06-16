const express=require('express');
const router=express.Router();
const events=require('../../../models/events');
const eventsController=require('../../../controllers/eventsController')
const passport=require('passport');

router.get('/',passport.authenticate('jwt',{session:false}),eventsController.getEvents);
router.post('/create',passport.authenticate('jwt',{session:false}),eventsController.create);
router.post('/addUser',passport.authenticate('jwt',{session:false}),eventsController.addUser)
router.get('/showJoinedUsers',eventsController.showJoinedUsers);
router.use('/token',require('./token'));
router.get('/getEventById',eventsController.getEventById);
router.get('/getEventByType',eventsController.getEventByType);
router.get('/getTopEvents',eventsController.getTopEvents);
module.exports=router;