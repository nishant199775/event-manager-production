const mailer=require('nodemailer');
const ejs=require('ejs')
const path=require('path')
require('dotenv/config')
const transporter=mailer.createTransport({
    service:'gmail',
    host:'smpt.gmail.com',
    port:587,
    secure:false,
    auth:process.env.mailerAuth
});

const renderTemplate=(data,relativePath)=>{
    let mailHtml;
    console.log('in renderTemp and data=',data.user.name);
    ejs.renderFile(
        path.join(__dirname,'../views/mailers',relativePath),
        data,
        (err,template)=>{
            if(err){console.log(err); return;}
            console.log(template);
            mailHtml=template;
        }
    )
    return mailHtml;

}

module.exports={transporter:transporter,renderTemplate:renderTemplate};