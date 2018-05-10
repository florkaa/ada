/*  Ejercicio 1: Escribir una función que dado un número X (base) y un número N (potencia),
	devuelva el resultado de realizar XN */


function potencia(base, exponente){ 
	resultado=Math.pow(base,exponente); 
	return resultado;
}
potencia(20,2);
console.log(resultado);


/* Ejercicio 2: Escribir una función que, dado un número pasado como parámetro, determine si es primo.*/

function primo(x){
	var num = 0;
	var cont = 2;
	var esPrimo=true;

	while((cont>1 && cont<num) && esPrimo==true){
		resto = num%cont;
		if(resto==0){
			esPrimo=false;
		}
		cont++
	}
	if(esPrimo==false){
		console.log("no es primo");
	}else{
		console.log("es primo");
	}
}

primo(21);







