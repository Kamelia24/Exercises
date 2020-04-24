const express = require('express');
const app = express();
app.get("/",(req, res) => {
    
        res.writeHead(200, { 'Content-Type': 'text/html' }); 
        res.write('<html><body><p>Go to /home or /contact ,please</p></body></html>');
        res.end();

});
app.get("/contact",(req, res) => {
   
        res.json({
        "visitor_type": "Value is required",
        "first_name": "Value is required",
        "email": "Value is required",
        "country": "Value is required",
        "subscribe": "Value is required",
        "typeofinq": "Value is required and can not be empty"
        });
    
});
app.get("/home",(req, res) => {
    
        res.writeHead(200, { 'Content-Type': 'text/html' }); 
        res.write('<html><body><p>This is the homepage. </p></body></html>');
        res.end();
    
});
var port=3000;
app.listen(port,()=>{console.log(`Node JS API is listening on port: ${port}`);});
