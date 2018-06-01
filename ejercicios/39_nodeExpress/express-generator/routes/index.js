var express = require('express');
var router = express.Router(); // llamo al constructor del router

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { 
		title: 'Hola mundo',
		message: 'the internet'
	});
});

module.exports = router;
