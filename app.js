const express = require('express');
const bodyParser= require("body-parser");
const { check, validationResult, matchedData } = require('express-validator');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.all('/contact', function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        next()
      });
app.all('/home', function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        next()
      });
app.all('/', function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        next()
      });
app.get("/",(req, res) => {
    
        res.writeHead(200, { 'Content-Type': 'text/html' }); 
        res.write('<html><body><p>Go to /home or /contact ,please</p></body></html>');
        res.end();

});
app.post('/contact', [
        check('visitor_type')
          .isIn(["company","private_person"])
          .withMessage('Value is required'),
        check('first_name')
          .isLength({ min: 1 })
          .withMessage('Value is required'),
        check('email')
          .isEmail()
          .withMessage('This is not valid email address'),
        check('country')
          .isIn(["24","15"])
          .withMessage('Value is required'),
        check('subscribe')
          .isIn(["Zoiper for Desktop (windows, mac, linux)","Zoiper for Android","Zoiper for iOS"])
          .withMessage('Value is required'),
        check('typeofinq')
          .isIn(["sales"])
          .withMessage('Value is required and can not be empty')
      ], (req, res) => {
        const errors = validationResult(req);
       
        if(errors["errors"].length==0){console.log("ok") ;return res.json({"success":"success"});}
        else{
                var obj={};
                for(let i=0;i<errors["errors"].length;i++){
                        obj[errors["errors"][i]["param"]]=errors["errors"][i]["msg"];
                        return res.json(obj);
                }
        }
        console.log(errors["errors"].length==0);
        
      });
app.get("/home",(req, res) => {
    
        res.writeHead(200, { 'Content-Type': 'text/html' }); 
        res.write('<html><body><p>This is the homepage. </p></body></html>');
        res.end();
    
});
var port=3000;
app.listen(port,()=>{console.log(`Node JS API is listening on port: ${port}`);});
