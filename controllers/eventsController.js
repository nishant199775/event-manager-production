const events=require('../models/events');
const users=require('../models/users')

module.exports.getEvents=async (req,res)=>{
  try{
      console.log('user',req.user);
    const allEvents=await events.find({}).sort({createdAt:-1}).populate('createdBy');
    res.json('200',{message:'events generated successfully',events:allEvents});
  }
    catch(err){
        console.log(err);
        res.json('500',{message:'error in getting events from db',error:err})
    }

}
module.exports.getEventById=async (req,res)=>{
    try{
        console.log(req.query.id);
        const id=req.query.id;
        const event=await events.findById(id).populate('createdBy');
        res.json('200',{message:"event details generated successfully",data:event});
    }
    catch(err){
        console.log(err);
        res.json('500',{message:'error in getting event by id'});
    }
}
module.exports.getEventByType=async (req,res)=>{
    try{
        console.log(req.query.id);
        const type=req.query.type;
        const event=await events.find({type:type})
        .sort({'date':1})
        .limit(3)
        .exec((err,events)=>{
            if(err){
            return res.json('500',{message:"error in finding top 3 similar events",error:err})
                }
            return res.json('200',{message:'successfully found top 3 similar events',data:events})
        });
        
    }
    catch(err){
        console.log(err);
        res.json('500',{message:'error in getting event by id'});
    }
}
module.exports.getTopEvents=async (req,res)=>{
    try{
        const topEvents=await events.find({}).select('name').select('image').select('type').sort({createdAt:-1}).limit(5).exec();
        res.json('200',{status:200,message:"Top Events generated successfully",events:topEvents})
    }
    catch(err)
    {
        console.log(err);
        res.json('200',{status:500,message:"error in finding top events",error:err});
    }
}
module.exports.create=async (req,res)=>{
    try{
        const data=req.body;
        console.log(data)
        data['createdBy']=req.user._id;
        const event=await events.create(data);
        res.json('200',{message:'event created successfully',event:event});
      }
        catch(err){
            console.log(err);
            res.json('500',{message:'error in creating event from db',error:err})
        }
}

module.exports.addUser=async (req,res)=>{
    try{
        const user_id=req.user._id;
        const event_id=req.body.event_id;
        console.log('user id:',user_id);
        console.log('event id:',event_id);


        const event=await events.findOne({createdBy:user_id});
        
        console.log(!event,'compare ',event);
        if(event)
        {
            console.log('same');
            return res.json('200',{message:"host and participant cannot be same",status:500})
        }
        else{

            await users.findByIdAndUpdate(user_id,{$push:{'joinedEvents':event_id}})

            await events.findByIdAndUpdate(event_id,{$push:{'participants':user_id}})

            return res.json('200',{message:"user added successfully"})

        }

        


    }
    catch(err){
        res.json('500',{message:"error in adding user from db"})
    }
}

module.exports.showJoinedUsers=async (req,res)=>{
    try{
        const event_id=req.query.event_id;
      const allUsers=await events.findById(event_id,{participants:1}).populate('participants');
      res.json('200',{message:'users found successfully',allUsers:allUsers.participants});
    }
      catch(err){
          console.log(err);
          res.json('500',{message:'error in getting joinedUsers from db',error:err})
      }
  
  }