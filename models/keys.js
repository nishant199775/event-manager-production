const mongoose=require('mongoose');
const users=require('./users')
const keysSchema=mongoose.Schema({
    key:{
        type:String,
    },
    attendance:{
        type:Boolean,
        
    },
    event:{
        type:mongoose.Types.ObjectId,
        ref:'events'
    },
    user:
    {
        type:mongoose.Types.ObjectId,
        ref:'users'
    },
    
},{
    timestamps:true
}
)
module.exports=mongoose.model('keys',keysSchema)