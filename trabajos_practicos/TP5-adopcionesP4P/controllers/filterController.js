const self = {}
var fs = require("fs");
var data = fs.readFileSync("public/data.json");
var bodyParser = require('body-parser');
var content = JSON.parse(data);
var filterType = ['perro', 'gato']
var filterSize = ['chico', 'mediano', 'grande']

self.filter = function(req, res, next){
	var filterTipo = req.body.tipo;
	var filterTamano = req.body.tamano;

	let filtered = content.filter(val => {
	  return val.type == filterTipo && val.size == filterTamano;
	});
	
	if(filtered.length==0){
		res.redirect('error')
	}else{
		res.render('adopciones', {content:filtered, filterType:filterType, filterSize:filterSize})
	}
}

module.exports = self;