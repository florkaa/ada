
/* Ejercicio 1: Modelar con pseudocódigo o js, la lógica de un sistema de semáforos en una esquina 
que consta de 2 semáforos para vehículos y dos semáforos peatonales.
Ejercicio 2: Incorporar al ejercicio anterior un semáforo para ciegos, esto implica
la posibilidad de tener modificar el estado de los semáforos en un momento dado.*/


/*Ejercicio 3: Modelar con lógica y estructuras conocidas un juego de preguntas y respuestas, 
que conste de:
	- 3 rondas de 5 preguntas cada una.
	- Para pasar de ronda deben responderse correctamente 3 preguntas por ronda
Ejercicio 4: A partir del ejercicio anterior, incorporar las siguientes condiciones:
	- El valor de las respuestas correctas en la primera ronda 
	será de 5 puntos, en la segunda 10 y en la tercera 15.
	- Al finalizar el juego se mostrará un cartel al jugador de excelente si consiguió 
	entre 125 y 150 puntos, muy bien entre 100 y 124 puntos y bien para menos de 124 puntos. */

var puntos=125;
var pregunta;
var ronda=3;
var respCorrectas=13;
switch(ronda){
	case 1: 
		puntos = 5*respCorrectas; 
		console.log("cantidad de puntos: " +puntos);
		break;
	case 2: 
		puntos = 10*respCorrectas + puntos; 
		console.log("cantidad de puntos: " +puntos);
		break;
	case 3: 
		puntos = 15*respCorrectas; 
		console.log("cantidad de puntos: " +puntos);
		break;
}
if(puntos>125 && puntos<150){
	console.log("¡Excelente!");
}else if(puntos>100 && puntos<=124){
	console.log("Muy bien");
}else if(puntos<99){
	console.log("Bien");
}