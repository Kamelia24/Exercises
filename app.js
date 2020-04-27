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
/*app.post("/contact",(req, res) => {
        res.json({
        "visitor_type": "Value is required",
        "first_name": "Value is required",
        "email": "Value is required",
        "country": "Value is required",
        "subscribe": "Value is required",
        "typeofinq": "Value is required and can not be empty"
        });
    
});*/
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
          .isIn(["Bulgaria","Austria"])
          .withMessage('Value is required'),
        check('subscribe')
          .isIn(["Zoiper for Desktop (windows, mac, linux)","Zoiper for Android","Zoiper for iOS"])
          .withMessage('Value is required'),
        check('typeofinq')
          .equals(["sales"])
          .withMessage('Value is required and can not be empty')
      ], (req, res) => {
        const errors = validationResult(req);
        res.render('contact', {
          data: req.body,
          errors: errors.mapped()
        });
      });
app.get("/home",(req, res) => {
    
        res.writeHead(200, { 'Content-Type': 'text/html' }); 
        res.write('<html><body><p>This is the homepage. </p></body></html>');
        res.end();
    
});
var port=3000;
app.listen(port,()=>{console.log(`Node JS API is listening on port: ${port}`);});
