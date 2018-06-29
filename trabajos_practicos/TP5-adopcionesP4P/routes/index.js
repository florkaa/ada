var express = require('express');
var router = express.Router();
var viewsController = require('../controllers/viewsController.js')
var codeController = require('../controllers/codeController.js')
var filterController = require('../controllers/filterController')

/* GET home page. */

router.get('/', viewsController.home);

router.get('/adopciones', viewsController.adopciones);

router.get('/adopcion/:code', codeController.code);

router.get('/adopciones/:page', viewsController.adopciones);

router.post('/adopciones', filterController.filter);

router.get('/favoritos', viewsController.favoritos);

router.get('/donaciones', viewsController.donaciones);

router.get('/error', viewsController.error);


module.exports = router;
