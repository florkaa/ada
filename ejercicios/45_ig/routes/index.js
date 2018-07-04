var express = require('express');
var router = express.Router();
const fileUpload = require('express-fileupload');
const fs = require('fs');
var path = require('path');
var directoryPath = path.join(__dirname, '../public/images');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Instagram', filelist: filelist });
});

var filelist = []

fs.readdir(directoryPath, function (err, files) {
	if(err){
		return console.log('Unable to scan directory: ' + err);
	}
	files.forEach(function (file) {
		if(! /^\..*/.test(file)) {
			var data = {user: 'florkaa',
						name: file}
			filelist.push(data)
			console.log(filelist)
		}
	})
})

module.exports = router;
