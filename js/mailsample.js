'use strict';
const nodemailer = require('nodemailer');
    sendmail = function(obj,callback){
    let transporter = nodemailer.createTransport({
        host: 'mail.padi.net.id',
        port: 25,
        secure: false, // true for 465, false for other ports
    });
    let info = transporter.sendMail({
        from: '"Budgeting" <support@padi.net.id>', // sender address
        to: obj.recipient, // list of receivers
        cc:obj.cc,
        bcc:'puji@padi.net.id',
        subject: obj.subject, // Subject line
        text: '[Budgeting App]', // plain text body
        html: '<b>'+obj.msg+'</b>' // html body
    });
    callback(info)
}
//main().catch(console.error);
module.exports = {
    sendmail: sendmail
}
