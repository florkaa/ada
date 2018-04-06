
/*  Ejercicio 1: Modelar con pseudocódigo o js, la lógica de un sistema de semáforos en una esquina 
que consta de 2 semáforos para vehículos y dos semáforos peatonales. 

	Ejercicio 2: Incorporar al ejercicio anterior un semáforo para ciegos, esto implica
la posibilidad de tener modificar el estado de los semáforos en un momento dado.*/

var semVehiculo1="rojo";
var semVehiculo2;
var semPeaton1;
var semPeaton2;
var semCiegos;

if(semVehiculo1=="rojo"){
	semVehiculo2="verde";
	semPeaton1="rojo";
	semPeaton2="verde";
}else if(semVehiculo1="verde"){
	semVehiculo2="rojo";
	semPeaton1="verde";
	semPeaton2="rojo";	
}else if(semCiegos=="verde"){
	if(semPeaton1=="verde"){
		semCiegos="verde";
	}else{
		semCiegos="verde";
	}
}

console.log("El primer semáforo de vehículos está "+semVehiculo1+
	", así que el segundo de peatones está "+semPeaton2);



/*Ejercicio 3: Modelar con lógica y estructuras conocidas un juego de preguntas y respuestas, 
que conste de:
	- 3 rondas de 5 preguntas cada una.
	- Para pasar de ronda deben responderse correctamente 3 preguntas por ronda
Ejercicio 4: A partir del ejercicio anterior, incorporar las siguientes condiciones:
	- El valor de las respuestas correctas en la primera ronda 
	será de 5 puntos, en la segunda 10 y en la tercera 15.
	- Al finalizar el juego se mostrará un cartel al jugador de excelente si consiguió 
	entre 125 y 150 puntos, muy bien entre 100 y 124 puntos y bien para menos de 124 puntos. */

var ronda=3;
var pregunta=5;
var respuesta=3;
var puntos=0;


if(respuesta>=3){
	if(ronda==1){
		puntos = respuesta * 5;
		console.log("puntos"+puntos);
	}else if(ronda==2){
		puntos = puntos + (respuesta * 10);
		console.log("puntos"+puntos);
	}else if(ronda==3){
		puntos = puntos + (respuesta * 15);
		console.log("puntos "+puntos);
	}
}

if(puntos>125 && puntos<150){
	console.log("¡Excelente!");
}else if(puntos>100 && puntos<=124){
	console.log("Muy bien");
}else if(puntos<99){
	console.log("Bien");
}