var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {

    function callback(err, data) {
        console.log(req);
        if (err) throw err;
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        res.end();
    }

    fs.readFile('./display.html', callback);
}).listen(8080);