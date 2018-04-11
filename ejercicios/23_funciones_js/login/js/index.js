
/* Función login */

//Devuelva true en caso de logueo correcto y false en caso contrario

function validar(usuario, password){
	if(usuario=="Pepe" && password==1234){
		return true;
	}else{
		return false;
	}
}

var cantidad=0;
var valido=validar("fido",1234);

while((valido) == false && cantidad<3){
	console.log("Usuario inválido");
	cantidad++;
	valido=validar("fido",1234);
}
if(valido){
	console.log("Bievenido");
}
if(cantidad==3 && !valido){
	console.log("Usuario bloqueado");
}

/*
valido		cantidad		logueo
false			0				
false			1			inválido
false			2			inválido
true			3			
*/

// FUNCIÓN DENTRO DE FUNCIÓN

function validar(usuario, password){
	if(usuario=="Pepe" && password==1234){
		return true;
	}else{
		return false;
	}
}

function login(usuario, password){
	var cantidad=0;
	var valido=validar(usuario,password);

	while((valido) == false && cantidad<3){
		console.log("Usuario inválido");
		cantidad++;
		valido=validar(usuario,password);
	}
	if(valido){
		console.log("Bievenido");
	}
	if(cantidad==3 && !valido){
		console.log("Usuario bloqueado");
	}
}

login("Pepe",1234);

// crear un array para usuario y otro para passwords //







// Validación de mayoría de edad.



function validarEdad(x){
	var edad = parseInt(x); //convierte el string en un número entero. Devuelve el número o devuelve NaN.
	if(!isNaN(edad)){
		if(edad>=18){
			return true;
		}else{
			return false;
		}
	}else{
		return "error";
	}
}

function isNaN(edad){
	if(edad==NaN){
		return true;
	}else{
		return false;
	}
}