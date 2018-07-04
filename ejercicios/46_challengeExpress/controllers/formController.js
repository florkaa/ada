const self = {}

self.fs = require('fs');

self.usuarios = [];

self.renderForm = function(req, res, next) {
  res.render('form');
};

self.user = function(req, res, next){
	const body = req.body;

	self.fs.appendFile("formList.json", JSON.stringify(body), function (err) {
  		if (err) console.log('buu');
  		console.log('Updated!');
	});;

	res.redirect('/user/list');
	// if(!usuario.nombre || !usuario.apellido || !usuario.telefono || !usuario.email){
	// 	$('.none').show();
	// }else{ 
		
	// 	res.redirect('/user');
	// }
	return res.sendStatus(200);
};

module.exports = self;