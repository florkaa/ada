
var express = require('express');
var router = express.Router();

var nenas = ['Isabel','Eduviges','Solange','Fernanda'];
var nenes = ['Bartolomeo','Segismundo','Oliverio','Aurelio'];
var names = nenas.concat(nenes);

router.get('/', function(req, res, next) {
  let nombresDes = random(names);
  res.render('index', { title: 'Nombres',
  						nombres: nombresDes
						});
});

router.get('/nene', function(req, res, next) {
  let nenesDes = random(nenes);
  res.render('nene', { title: 'nenes',
  										 nenes: nenesDes
  										});
});

router.get('/nena', function(req, res, next) {
  let nenasDes = random(nenas);
  res.render('nena', { title: 'nenas',
  											nenas: nenasDes
  										});
});

function random(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

module.exports = router;