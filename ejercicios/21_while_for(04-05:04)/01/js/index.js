cont=0;
usr="u1";
password = "p1";

while(cont<3){
	if(usr=="u1" && password=="p1"){
		console.log("bievenido");
	}else{
		console.log("no auth");
		cont++
	}
}
if(cont==3){
	console.log("bloqueado");
}

/*
cont | u&p | salida
 0 		F		NA
 1		F		NA
 2		F		NA
 3		X	  Block
 0		V		B
 0		V		B

 no funciona, se genera un loop infinito.
 */


 while(cont<3){
 	if(true){
 		cont=4; /* un número mayor al 3 que bloquearía la cuenta */
 	}else{
 		cont++;
 	}
 }
 if(cont==3){
 	console.log("bloqueado");
 }

/*
cont | u&p | salida
 0 		F		NA
 1		V		Bienvenido
 4		X		X  ENTRÁS.
 */

var logueado; 

 while(cont<3 && logueado==false){
 	if(true){
 		logueado=true;
 	}else{
 		cont++;
 	}
 }
 if(cont==3){
 	console.log("bloqueado");
 }

 /*
cont | Logueado |  u&p | salida
  0		  F 		F 		NA
  1		  F 		V 		Bienvenido
  1		  V 		X		X     - ENTRÁS.
 */


/* Función login */

//Devuelva true en caso de logueo correcto y false en caso contrario

function login(usuario, password){
	if(usuario=="Pepe" && password==1234){
		return true;
	}else{
		return false;
	}
}

if(login("fido",1234)){
	console.log("Bievenido");
}else{	
	console.log("Error");
}


