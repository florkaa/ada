// exports así puedo exportarlo en node
// .nombre de la función
// y después toda la función

exports.signo = function(m, d){
	let month = parseInt(m);
	let day = parseInt(d);

	if(month=='1' && day>='20' || month=='2' && day<='18'){
		return "Sos de Acuario"
		console.log("Sos de Acuario");
	}else if(month=='2' && day>='19' || month=='3' && day<='20'){
		return "Sos de Piscis"
		console.log("Sos de Piscis");
	}else if(month=='3' && day>='21' || month=='4' && day<='19'){
		return "Sos de Aries"
		console.log("Sos de Aries");
	}else if(month=='4' && day>='20' || month=='5' && day<='20'){
		return "Sos de Tauro"
		console.log("Sos de Tauro");
	}else if(month=='5' && day>='21' || month=='6' && day<='20'){
		return "Sos de Géminis"
		console.log("Sos de Géminis");
	}else if(month=='6' && day>='21' || month=='7' && day<='22'){
		return "Sos de Cáncer"
		console.log("Sos de Cáncer");
	}else if(month=='7' && day>='23' || month=='8' && day<='22'){
		return "Sos de Leo"
		console.log("Sos de Leo");
	}else if(month=='8' && day>='23' || month=='9' && day<='22'){
		return "Sos de Virgo"
		console.log("Sos de Virgo");
	}else if(month=='9' && day>='23' || month=='10' && day<='22'){
		return "Sos de Libre"
		console.log("Sos de Libra");
	}else if(month=='10' && day>='23' || month=='11' && day<='21'){
		return "Sos de Escorpio"
		console.log("Sos de Escorpio");
	}else if(month=='11' && day>='22' || month=='12' && day<='21'){
		return "Sos de Sagitario"
		console.log("Sos de Sagitario");
	}else if(month=='12' && day>='22' || month=='1' && day<='19'){
		return "Sos de Capricornio"
		console.log("Sos de Capricornio");
	}
}