const http = require('http');
const fs = require('fs');
let app = http.createServer((req, res) => {
    res.json({
        "visitor_type": "Value is required",
        "first_name": "Value is required",
        "email": "Value is required",
        "country": "Value is required",
        "subscribe": "Value is required",
        "typeofinq": "Value is required and can not be empty"
    })
});
app.listen(2000);
console.log('Node server running on port 2000');