var express = require('express');
var router = express.Router();
var contactoController = require('../controllers/contactoController')

/* GET users listing. */
router.get('/', contactoController.index);

router.post('/', contactoController.form)

module.exports = router;
