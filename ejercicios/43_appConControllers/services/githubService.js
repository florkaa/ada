const axios = require('axios')
const service = {}

service.getRepositories = function (githubUser) {
  	return axios
		.get('https://api.github.com/users/ezeggonzalez/repos')
		.then(function(res){
			return res.data
		})
}

module.exports = service;



