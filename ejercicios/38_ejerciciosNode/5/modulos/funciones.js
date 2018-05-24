exports.age = function(a){
	let age = parseInt(a);
	if(age>=18){
		return "es mayor de edad"
	}else{
		return "es menor de edad"
	}
}