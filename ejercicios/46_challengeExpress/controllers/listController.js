const self = {}
var fs = require("fs");
var data = fs.readFileSync("formList.json");
var content = JSON.parse(data);

self.index = function(req, res, next) {
	res.render('list', { title: '¡Lista!', content: content});
}

module.exports = self;