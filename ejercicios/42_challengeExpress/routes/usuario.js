var express = require('express');
var router = express.Router();
var usuarioController = require('../controllers/usuarioController')

var users = []

/* GET users listing. */
router.get('/', usuarioController.index);

router.post('/', usuarioController.users)

module.exports = router;
