const self = {}

var consultas = []

self.index = function(req, res, next) {
  res.render('contacto');
} 


self.form = function(req, res, next){
	let consulta = {};

	consulta.nombre = req.body.nombre;
	consulta.email = req.body.email;
	consulta.consulta = req.body.consulta;
	consultas.push(consulta);
	console.log(consultas)

	res.redirect('/contacto');
}


module.exports = self