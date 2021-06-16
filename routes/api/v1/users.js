const express=require('express');
const router=express.Router();
const usersController=require('../../../controllers/usersController');
const passport=require('passport');

router.post('/signup',usersController.create);
router.get('/signin',usersController.createSession);
router.get('/',passport.authenticate('jwt',{session:false}),usersController.home);
router.get('/showCreatedEvents',passport.authenticate('jwt',{session:false}),usersController.showCreatedEvents);
router.get('/showJoinedEvents',passport.authenticate('jwt',{session:false}),usersController.showJoinedEvents)

module.exports=router;

