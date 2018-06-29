const self = {}
var fs = require("fs");
var data = fs.readFileSync("public/data.json");
var content = JSON.parse(data);

self.code = function(req, res, next){ 
    let pet = search(req.params.code);
    	return res.render('info', { pet: pet });
}


function search(codigo){
	for(var i=0; i<content.length; i++){
		if(codigo == content[i].code){
			return content[i];
		}
	}
	return null;
}

module.exports = self;