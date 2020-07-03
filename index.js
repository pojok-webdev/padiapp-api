var express = require('express'),
app = express(),
path = require('path'),
con = require('./js/connections.js'),
query = require('./js/queries.js'),
//help = require('./js/help.js'),
bodyParser = require('body-parser'),
mailer = require('./js/mailer.js'),
postmailer = require('./js/mailsample.js'),
jwt = require('jsonwebtoken'),
secretOrKey = 'padinet',
config = require("./js/configs.js"),
auth = require('./js/auth.js'),
auth1 = require('./js/auth.1.js'),
common = require("./js/commons.js");
app.engine("html",require("ejs").renderFile);
    app.set('views',path.join(__dirname,'views'));
    app.use(express.static(__dirname+'views'));

app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.json({limit: '10mb', extended: true}));
app.use(bodyParser.urlencoded({limit:'10mb',extended:true}));
app.post('/login',(req,res) => {
    email = req.body.email
    password = req.body.password
    console.log("QUERY",query.login({email:req.body.email}))
    con.getdata(query.login({email:req.body.email}),result=>{
        _result = result[0]
        lg = auth1.login(_result,password)
        if(lg){
            var payload = {
                id:_result.id,
                name:_result.username,
                email:_result.email,
                defaultRoute:result.defaultRoute,
                role:_result.role,
                roleclass:_result.roleclass,
                division_id:_result.division_id
            }
            var token = jwt.sign(payload,secretOrKey,{expiresIn:config.jwt().expiresIn})
            console.log('token',token)
            console.log("RESULT",_result)
            _result.token = token
            _result.message = "ok"
            res.send(_result)
        }else{
            res.send({message:'auth error'})
        }
    })
})
app.post('/updatepassword',(req,res) => {
    con.getdata(query.login({email:req.body.email,password:req.body.password}),result => {
        user = result[0]
        console.log("USER",result)
        newpassword = auth1.changePassword(user,req.body.newpassword)
        console.log("QUERY",query.updatePassword({email:req.body.email},newpassword))
        con.getdata(query.updatePassword({email:req.body.email},newpassword),result => {
            res.send(result)
        })
    })
})
app.post('/createuser',(req,res) => {
    _salt = auth1.createSalt(32,'0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ')
    newpassword = auth1.changePassword({
        salt:_salt,
        password:req.body.password
    },req.body.password)
    console.log("New Password",newpassword)
    console.log("Salt",_salt)
    req.body.password = newpassword
    req.body.salt = _salt
    console.log("Query",query.createUser(req.body))
    con.getdata(query.createUser(req.body),result => {
        res.send(result)
    })
})
app.post('/activateuser',(req,res) => {
    con.getdata(query.activateUser(req.body,req.body.active), result => {
        res.send(result)
    })
})
app.get('/islogin/:token', (req,res) => {
    verify = jwt.verify(req.params.token,secretOrKey,(err,data) => {
        if(!err){
            console.log("Verified",data)
            res.send(data)
        }else{
            console.log("Err",err)
            res.send(err)
        }
    })
})
app.get('/getlogin/:token',(req,res) => {
    decoded = jwt.decode(req.params.token,{complete:true})
    console.log("decoded",decoded)
    res.send(decoded)
})

app.get('/sendmail/:recipient',(req,res) => {
    res.header("Access-Control-Allow-Origin","*");
    var recipient = req.params.recipient;
    mail = {
        to : recipient,
        msg : "Test Mail : "+recipient
    }
    mailer.sendmail(mail,function(content){
        console.log("Sendmail Content",content)
//        res.send("Mail Sent : ",recipient);
    });
})
app.post('/postmail',(req,res) => {
    res.header("Access-Control-Allow-Origin","*");
    postmailer.sendmail(req.body, content => {
        console.log("Postmail Content",content)
        res.send(content);
    });
})
app.get('/help/:method',(req,res) => {
    obj = help.getdata(req.params.method)
    appconfig = config.appserver()
    console.log("Obj",obj)
    res.render("help.html",{
        data:{
            name:req.params.name,
            method:req.params.method,
            name:obj.name,
            method:obj.method,
            description:obj.description,
            format:obj.format,
            syntax:obj.syntax,
            server:appconfig.name,
            port:appconfig.port
        }
    });
})




app.get('/getclients',(req,res) => {
    res.header("Access-Control-Allow-Origin","*");
    console.log("Query",query.getClients());
    con.getdata(query.getClients(),result => {
        console.log("Result",result);
        res.send(result);
    })
})
app.get('/getclient/:id',(req,res)=>{
    res.header("Access-Control-Allow-Origin","*");
    con.getdata(query.getClient(req.params),result => {
      res.send(result)
    })
})
app.post('/getclientsbyname',(req,res)=>{
    res.header("Access-Control-Allow-Origin","*");
    con.getdata(query.getClientsByName(req.body),result=>{
        res.send(result)
    })
})
app.get('/getclientsitesbyclientid/:id',(req,res)=>{
    res.header("Access-Control-Allow-Origin","*");
    con.getdata(query.getClientSitesByClientId(req.params),result => {
      res.send(result)
    })
})
app.get('/getallclientsites',(req,res)=>{
    res.header("Access-Control-Allow-Origin","*");
    con.getdata(query.getAllClientSites(),result => {
      res.send(result)
    })
})
app.get('/getfb/:id',(req,res)=>{
    res.header("Access-Control-Allow-Origin","*");
    con.getdata(query.getFb(req.params),result => {
      res.send(result)
    })
})
app.post('/createlog',(req,res)=>{
    con.getdata(query.createLog(req.body),result=>{
        res.send(result)
    })
})
app.get('/getlogs',(req,res)=>{
    con.getdata(query.getLogs(),result=>{
        res.send(result)
    })
})
app.get('/autoupdateexpiredfb',(req,res)=>{
    res.header("Access-Control-Allow-Origin","*");
    con.getdata(query.autoUpdateExpiredFb(),result => {
      res.send(result)
    })
})
app.get('/autoupdatevalidfb',(req,res)=>{
    res.header("Access-Control-Allow-Origin","*");
    con.getdata(query.autoUpdateValidFb(),result => {
      res.send(result)
    })
})
app.get('/autoupdateinvalidfb',(req,res)=>{
    res.header("Access-Control-Allow-Origin","*");
    con.getdata(query.autoUpdateInvalidFb(),result => {
      res.send(result)
    })
})
app.get('/autoupdatevalidfbs',(req,res)=>{
  res.header("Access-Control-Allow-Origin","*")
  con.getdata(query.autoUpdateValidFbs(),result =>{
    res.send(result)
  })
})
app.post('/autoupdateticketchildren',(req,res)=>{
  res.header("Access-Control-Allow-Origin","*")
  con.getdata(query.autoUpdateTicketChildren(req.body),result=>{
    res.send(result)
  })
})
app.listen(process.env.PORT || 2020);
