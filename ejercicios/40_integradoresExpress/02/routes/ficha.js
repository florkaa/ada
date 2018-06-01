var express = require('express');
var router = express.Router();

var personas = [{ dni: "36162232", nombre : "Florencia Caputti", edad: 27, gs: "A+", alergias: "No posee"},
								{ dni: "25402102", nombre : "Jaime Suarez", edad: 25, gs: "A+", alergias: "No posee"},
								{ dni: "14884351", nombre : "Graciela Montes", edad: 55, gs: "A+", alergias: "No posee"}];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ficha' });
});

router.get('/:dni', function(req, res, next) {
	if(!isNaN(req.params.dni)){
		let paciente = search(req.params.dni)
	  res.render('ficha', { title: 'ficha del paciente', paciente: paciente});
  }else{
		res.render('404');
	}
});

function search(dni){
	for(var i=0; i<personas.length; i++){
		if(dni == personas[i].dni){
			return personas[i];
		}
	}
	return res.render('404');
}
module.exports = router;
