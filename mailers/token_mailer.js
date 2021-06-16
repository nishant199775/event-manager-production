const mailer=require('../config/nodemailer');

exports.newToken=(user)=>{

    let htmlString=mailer.renderTemplate({user:user},'/tokenMailer.ejs');

    mailer.transporter.sendMail({
        from:'Event-manager',
        to:user.email,
        subject:'secret key',
        html:htmlString,
        
    },(err,info)=>{
            if(err){
                console.log('error in sending mail',err);
            }
            console.log('mail send successfully',info);
    })
}