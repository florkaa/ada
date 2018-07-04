var express = require('express');
var router = express.Router();
var indexController = require('../controllers/indexController');
var pingController = require('../controllers/pingController');
var formController = require('../controllers/formController');
var listController = require('../controllers/listController');

router.get('/', indexController.redirect);

router.get('/ping', pingController.send);

router.get('/user/form', formController.renderForm);

router.post('/user/form', formController.user);

router.get('/user/list', listController.index);

module.exports = router;
