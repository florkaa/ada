
var http = require('http'); // traemos un módulo
var fs = require('fs') // pide el archivo
var url = require('url');
var modulo = require('./modulos/funciones');

var puerto = 8080;
http.createServer(function(req,res){ // creamos el servidor
	fs.readFile('demo.html', function(err, data){ // lee nuestro archivo y busca el error o la data.
		res.writeHead(200, {'Content-Type': 'text/html'}); // 
		//res.write(data); // pedimos la data del archivo
		var x = url.parse(req.url, true).query; // exporta los parámetros a un objeto
		var country = x.country;
		let respuesta = modulo.country(country);
		res.end();
	});
}).listen(puerto, function(){
	console.log("escuchando en el puerto: " + puerto);
});
