var express = require('express'); // importo express
var router = express.Router(); // creo las rutas

router.get('/', function(req, res){
	res.send('listado de clientes')
})

router.post('/', function(req, res){
	res.send('crear un nuevo cliente')
})

module.exports = router; // exporto el módulo que cree