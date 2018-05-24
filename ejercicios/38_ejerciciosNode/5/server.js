var http = require('http');
var puerto = 8080;
var modulo = require('./modulos/funciones');
var url = require('url');

http.createServer(function(req,res){ 
	res.writeHead(200, {'Content-Type': 'text/html'}); 

	var x = url.parse(req.url, true).query; // exporta los parámetros a un objeto
	var a = x.age;

	let respuesta = modulo.age(a);

	res.end(respuesta);
}).listen(puerto, function(){
	console.log("escuchando en el puerto: " + puerto);
});