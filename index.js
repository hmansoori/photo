const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const creds = require('./config/emailConfig');
var nodemailer = require('nodemailer');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/public')));



app.post('/send', (req, res) => {
    var body = req.body;
    var firstName = body.firstName
    var lastName = body.lastName
    var email = body.email
    var subject = body.subject
    var message = body.message
    var content = `firstName: ${firstName} \n lastName: ${lastName} \n email: ${email} \n message: ${message} `
  
    var mail = {
        from: 'contacthjm@yahoo.com',
        to: 'contacthjm@yahoo.com',  //Change to email address that you want to receive messages on
        subject: subject,
        text: content
      }

    var transport = {
        host: 'smtp.mail.yahoo.com',
        port: 587,
        service: 'yahoo',
        secure: false,
        auth: {
          user: creds.USER,
          pass: creds.PASS
        },
        debug: false,
        logger: true

    }
    var transporter = nodemailer.createTransport(transport)
  
    transporter.sendMail(mail, (err, data) => {
      if (err) {
        res.json({
          msg: 'fail'
        })
      } else {
        res.json({
          msg: 'success'
        })
      }
    })
  })

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/public/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);