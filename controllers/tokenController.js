const token=require('../models/keys')
const crypto=require('crypto')
const users=require('../models/users')
const tokenMailer=require('../mailers/token_mailer');
const events =require('../models/events');

module.exports.create=async (req,res)=>{
    try{
        const user_id=req.user._id;
        const event_id=req.body.event_id;
        const role=req.user.role;
        // if(role!=0)
        // {
        //     return res.json('200',{status:'401',message:"Sorry!This action is Allowed only for Admin",unauthorized:true})
        // }
        // checking registration is requested by organiser of the event
        const eventById=await events.findById(event_id);
        if(eventById.createdBy===user_id)
        {
            console.log('oraniser and user cannot be same');
            return res.json('200',{message:"Organise cannot participate in his own Event",status:500,warning:true})
        }
        // checking user has already generated token or not
        const alreadyToken=await token.findOne({user:user_id,event:event_id});
        if(alreadyToken){
            return res.json('200',
            {message:'You are already Registered!Cant generate token as it is already generated! ',status:500,token:alreadyToken,warning:true});
        }
        else{
            const id=crypto.randomBytes(16).toString('hex');
            console.log("in create res:",res.body);
            const key=await token.create({key:id,user:user_id,event:event_id,attendance:false})
            const user=await users.findById(user_id);

            user['key']=key.key;
            await tokenMailer.newToken(user);

            res.json('200',{message:'Token generated successfully!',status:200,token:key,warning:false});
        }
        
    }
    catch(err){
        res.json('500',{message:"error in generating token",status:401,error:err});
    }
}

module.exports.authToken=async (req,res)=>{
    try{
        const key=req.body.key;
        const event_id=req.body.eid;
        const email=req.body.email;

        const userByEmail=await users.findOne({email:email});
        console.log('user',userByEmail);
        if(!userByEmail)
        {
            res.json('200',{message:"No User with this email id exists",status:500})
        }
        const user_id=userByEmail._id;
        console.log('user_id',user_id);
        console.log('event_id',event_id);
        const TokenInst=await token.findOne({user:user_id,event:event_id})
        console.log('token inst',TokenInst);
        
        if(!TokenInst){
                return res.json('200',{message:'No user with this "Email" Registered with the Event!',status:500})
                }
        else{
             
                if(TokenInst.key==key)
                {
                    if(TokenInst.attendance)
                    {
                        return res.json('200',{message:'Attendance already marked ',status:500})
                    }

                    const status=await token.findByIdAndUpdate(TokenInst._id,{attendance:true},{new:true});
                    return res.json('200',{message:'Attendance marked successfully',status:200})
                    
                }
                
                else{
                    return res.json('200',{message:'Secret Key doesnot match!',status:500})
                }
            }
        }
        catch(err){
            res.json('500',{message:'error in marking attendance',error:err});
        }

}
module.exports.showDetails=async (req,res)=>{
    try{
        const key=req.body.key;
        const event_id=req.body.eid;
        const email=req.body.email;

        const userByEmail=await users.findOne({email:email});
        console.log('user',userByEmail);
        const user_id=userByEmail._id;
        console.log('user_id',user_id);
        console.log('event_id',event_id);
        const TokenInst=await token.findOne({user:user_id,event:event_id})
        console.log('token inst',TokenInst);
        
        if(!TokenInst){
                return res.json('200',{message:'there is no user registered with the event',status:500})
                }
        else{
             
                if(TokenInst.key==key)
                {
                    
                    return res.json('200',{message:'Attendance marked successfully',status:200,data:userByEmail})
                    
                }
                
                else{
                    return res.json('200',{message:'Secret Key doesnot match!',status:500})
                }
            }
        }
        catch(err){
            res.json('500',{message:'error in marking attendance',error:err});
        }

}

module.exports.showJoinedEventsWithToken=async (req,res)=>{
    const role=req.user.role;
    if(role!=1)
    {
      return res.json('200',{message:"Unauthorized Acess",Unauthorized:true});
    }
    else{
        try{
      const uid=req.user._id;
      const events=await token.find({user:uid}).populate('event');
      return res.json('200',{message:'joined events generated successfully',data:events})
    
    }
    catch(err)
    {return res.json({message:"error in finding Joined Events",status:200,error:err});}
       
   }
  }

  module.exports.recentRegistrants=async (req,res)=>{
        try{const org_id=req.user._id;
        const eventsByOrg=await events.find({createdBy:org_id}).select('_id');
        console.log(eventsByOrg)
        const recent=await token.find({event:{$in:eventsByOrg}}).sort({createdAt:-1}).select('createdAt').select('user').select('event').select('key').populate('user').populate('event');
        console.log('recent',recent)
        res.json('200',{message:"Recent Registrants generated successfully",status:200,users:recent});}
        catch(err)
        {
            console.log(err);
            res.json('200',{message:"Error in generating recent registrants",status:500,error:err})
        }
  }