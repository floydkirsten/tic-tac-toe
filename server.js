var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
    function callback(err, data) {
        if (err) throw err;
        let contentType = "text/html"; 
        if (req.url == '/display.css') contentType = "text/css";
        if (req.url == '/server.js') contentType = "js";
        console.log(contentType);
        res.writeHead(200, { 'Content-Type': contentType });
        res.write(data);
        res.end();
    }
    if (req.url == '/') fs.readFile('./display.html', callback)
    else if (req.url != '/favicon.ico'){
        console.log(req.url); 
        fs.readFile("." + req.url, callback);
    }
        
    
}).listen(8000);

function hello() {
    console.log("Hello World");
}
