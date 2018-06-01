var express = require('express'); //importar expresss
var app = express(); // ejecutar
var fs = require('fs'); // pido el fileServer para levantar mis archivos

app.get('/', function(req, res){
	fs.readFile('html/index.html', function(err, data){
		res.write(data);
		res.end();
	})
});

app.get('/prueba', function(req, res){
	res.send('hello world desde /prueba');
});

app.use('/customer', require('./customer.js')) //vinculo el primer parámetro (path del módulo) con el segundo (módulo que queremos usar)
                                               // escribo "./" al principio porque es un módulo propio.
app.listen(3000); // escucha el puerto.


// MÉTODOS HTTP.
// .get
// .post
// .put --editar
// .patch --editar una parte del objeto
// .delete --eliminar