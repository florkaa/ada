
var http = require('http'); 
var fs = require('fs')
var port = 8080;

http.createServer(function(req,res){ 
	res.writeHead(200, {'Content-Type': 'text/html'});
	fs.readFile('html/index.html', function(err, data){ 
		res.write(data); 
		res.end();
	});
}).listen(port, function(){
	console.log("escuchando en el puerto: " + port);
});
