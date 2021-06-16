const express=require('express')
const db=require('./config/mongoose')
const app=express();
const port=process.env.PORT||7000;
const router=require('express-router');
const passportJWT=require('./config/passport-jwt-strategy')

// parsing req data
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// serving static files of client to heroku
if(process.env.NODE_ENV=='production')
{
    app.use(express.static('client/build'));
    const path=require('path');
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'));
    })
}
// cors handle
app.use(function (req,res,next){
    console.log('in cors handler')
    res.header("Access-Contorl-Allow-Origin","*");
    res.header("Access-Contorl-Allow-Methods","GET,POST,DELETE,PUT,OPTIONS");
    res.header(
        "Access-Contorl-Allow-Headers",
        "Origin,X-Requested-With,Content-Type,Accept"
    );
    next();
});

// setting up router
app.use('/',require('./routes/index'))


app.listen(port,(err)=>
{
    if(err)
    console.log("error in starting server",err);
    else
    console.log(`server started at `,port);
})