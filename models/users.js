const mongoose=require('mongoose');
const events=require('./events')
const userSchema=mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
        
    },
    password:{
        type:String,
    },
    role:
    {
        type:Number,
        default:1
    },
    joinedEvents:[{type:mongoose.Types.ObjectId,ref:'events'}],
    phone:{
        type:Number
    },
    city:{
        type:String
    },
    gender:{
        type:String,
        default:"Male"
    }
    
},{
    timestamps:true
}
)

module.exports=mongoose.model('users',userSchema);