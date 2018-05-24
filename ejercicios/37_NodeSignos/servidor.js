
var http = require('http');
var puerto = 8080;

var miModulo = require('./modulos/proceso');

var url = require('url');

http.createServer(function(req,res){ 
	res.writeHead(200, {'Content-Type': 'text/html'}); 

	var q = url.parse(req.url, true).query; // exporta los parámetros a un objeto
	var m = q.month;
	var d = q.day;

	let respuesta = miModulo.signo(m,d);

	res.end(respuesta);
}).listen(puerto, function(){
	console.log("escuchando en el puerto: " + puerto);
});