const passport=require('passport')
const jwtStrategy=require('passport-jwt').Strategy;
const extractJWT=require('passport-jwt').ExtractJwt;
const users=require('../models/users');
require('dotenv').config()

const opts={
    jwtFromRequest:extractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey:process.env.jwtSecret
}
passport.use(new jwtStrategy(opts,(jwtPayLoad,done)=>{

  users.findById(jwtPayLoad._id,(err,user)=>{
      if(err){console.log("error in finding user"); return ;}
      if(user){return done(null,user)}
      else{return done(null,false)}
  })

}))
module.exports=passport;