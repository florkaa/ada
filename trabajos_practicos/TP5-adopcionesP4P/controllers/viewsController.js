const self = {}
var fs = require("fs");
var data = fs.readFileSync("public/data.json");
var content = JSON.parse(data);
var filterType = ['perro', 'gato']
var filterSize = ['chico', 'mediano', 'grande']

self.home = function(req, res, next) {
	res.render('home', { title: 'Proyecto 4 patas'});
}

self.adopciones = function(req, res, next) {
	let page;
	if (req.params.page) {
    	page = req.params.page;	
	} else {
    	page = 1;
  	}

  	const limit = 9;
  	const offset = (page - 1) * limit;
  	let nuevoContent = [];

	for (var i = offset; i < offset + limit; i++) {
    	if (content[i]) {
      		nuevoContent.push(content[i]);
    	}
  	}
  	if (nuevoContent.length == 0) {
    	res.redirect('error')
  	}

  	res.render('adopciones', { title: '¡Adoptá un amigo!', total: Math.ceil(content.length / limit), currentPage: req.params.page, content: nuevoContent, filterSize: filterSize, filterType: filterType});
}

self.donaciones = function(req, res, next) {
	res.render('donaciones', { title: 'Donaciones'});
}

self.favoritos = function(req, res, next) {
	res.render('favoritos', { title: 'Tus favoritos'});
}

self.error = function(req, res, next) {
	res.render('error', { title: 'Error'});
}

module.exports = self;