const jwt = require('jsonwebtoken');
const users=require('../models/users')
const events=require('../models/events')


module.exports.home=async function(req,res){
  
    res.json({message:"user generated successfully",user:req.user,role:req.user.role});
}

module.exports.create=async function(req,res){
    // if(req.body.password!=req.body.confirmPassword)
    // {
    //     return res.redirect('back');
    // }
    try{
      
      console.log("req data",req.body);
        const user=await users.findOne({Email:req.body.email})
      
      if(user)
        { 
         
          console.log("user",user);
            return res.json(200,{message:"email already exist",status:500});
        }
      else if(!user)
        {
          const data=req.body;
          if(data.role==="")
          data['role']=1;
          
          if(data.gender==="")
          data['gender']="Male";

            const newUser=await users.create(req.body)
            console.log("created successfully");
            return res.status(200).json({message:"successfully created",
         data:newUser,status:200});
        }
      }
    catch(err){
        console.log(err);
        return res.status(200).json({message:"error in creating user",error:err,status:500});
    }
 }

 module.exports.createSession=async function(req,res){
   try{
     console.log("email",req.query.email);
    const user=await users.findOne({email:req.query.email})
    if(!user || user.password!=req.query.password)
    {
      return res.json(200,{message:"username or password is incorrect",status:500})
    }
    else{
      return res.json(200,{message:"signed in successfully",status:200,role:user.role,
     token:jwt.sign(user.toJSON(),'event',{expiresIn:100000})})
    }
   }
     catch(err){
       console.log(err);
       return res.json(401,{message:"error in signing from jwt",error:err});
     }
 }

 module.exports.showCreatedEvents=async (req,res)=>{
   try{
    const user_id=req.user._id;
    const createdEvents=await events.find({createdBy:user_id});
    res.json('200',{message:"events found successfully",data:createdEvents});
   }
    catch(err){
      res.json('500',{message:"error in finding createdEvents",error:err});
    }
    

 }
 module.exports.showJoinedEvents=async (req,res)=>{
   const role=req.user.role;
   if(role!=0)
   {
     return res.json('200',{message:"Unauthorized Acess",Unauthorized:true});
   }
   else{
     const uid=req.user._id;
     await users.findById(uid).populate('joinedEvents').exec((err,user)=>{
       if(err){return res.json({message:"error in finding Joined Events",status:200,error:err})}
      return res.json('200',{message:'joined events generated successfully',data:user.joinedEvents})
     });
     

   }
 }