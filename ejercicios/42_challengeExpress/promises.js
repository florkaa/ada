const axios = require('axios')
//import axios from 'axios';

axios
	.get('http://localhost:3000/users/listjson') //donde quiero hacer el request
	.then(function(res){ //qué quiero hacer
		console.log(res.data)
	})
	.then(function(res){ //qué quiero hacer después
		console.log('eso')
	})
	.catch(function(err){
		console.log('error catch')
	})