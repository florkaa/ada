const self = {}
var fs = require("fs");
var data = fs.readFileSync("public/data.json");
var bodyParser = require('body-parser');
var content = JSON.parse(data);

self.page = function(req, res, next) {

};


module.exports = self;