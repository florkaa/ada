const self = {}

self.index = function(req, res, next) {
  res.render('registro');
}

self.users = function(req, res, next){
	let user = {};

	user.usuario = req.body.usuario;
	user.email = req.body.email;
	user.contrasena = req.body.contrasena;
	user.confContra = req.body.confContra;
	users.push(user);

	res.redirect('/usuario');
}

module.exports = self;