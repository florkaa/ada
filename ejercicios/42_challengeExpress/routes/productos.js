var express = require('express');
var router = express.Router();
var productosController = require('../controllers/productosController.js')


/* GET users listing. */
router.get('/', productosController.index);

router.get('/:codigo', productosController.codigo)

router.get('/:categoria', productosController.categoria)


module.exports = router;
