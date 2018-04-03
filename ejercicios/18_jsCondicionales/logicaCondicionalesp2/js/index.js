/* Ejercicio 1 – Un sistema de fidelización de usuarios implementa la siguiente regla para la
adquisición de productos del catálogo. Se pide determinar la lógica de canje.
- El producto X que se desea canjear tiene un valor determinado en cantidad de puntos.
- Si el cliente que lo quiere canjear tiene la cantidad de puntos requerida realiza
directamente el canje.
- Si el cliente tiene el 50% de los puntos requeridos, podrá completar el canje con dinero,
en ese caso cada peso equivaldrá a 3 puntos.
- Si el cliente tiene el 50% de los puntos requeridos, pero a su vez tiene categoría
premium, la relación pesos puntos será 1 a 5. */

var producto = 1200;
var puntos=600;
var pesos = 0;
var categoria="premium";

if(producto==puntos){
	console.log("tiene puntos suficientes para el canje");
}else if(puntos==producto/2){
	var x=producto-puntos;
	if(categoria=="premium"){
	var pesos=x/5;
	producto = producto/2 + pesos;	
	}else{
	var pesos=x/3;
	producto = producto/2 + pesos;
	} 
	console.log("agregará $"+pesos+" para comprar "+x+
		" puntos y canjeará los "+puntos+" que ya tenía.");
}

/*
Ejercicio 2 - Ana desea inscribir a su hijo Tomás a la colonia de vacaciones, 
para tomar la decisión tiene en cuenta distintas variables.
A) Si la colonia queda a más de 10 km, tendrá que contratar un transporte, 
por lo que para elegir esta opción el costo mensual deberá ser menor a $1500.
B) Si la colonia queda a menos de 10 km, su presupuesto total se incrementa en un 20%, 
con lo cual evaluará incluir almuerzo en la colonia si este no excede el 15% del valor de la cuota.
C) Finalmente, si la colonia está más lejos de 10km, y su costo es mayor a $1500, 
pero es doble turno y le brinda almuerzo, está dispuesta a pagar hasta $2800.
*/

var distancia = 7;
var costo=1400;
var comedor=50;
var presupuesto=1600;
var turno;

if(distancia>10 && costo<1500){
	console.log("irá a la primera opción");
}else if(distancia<10){
	costo = presupuesto + (presupuesto * 0.2);
		if(comedor<costo*0.15){
			console.log("segunda opción con comedor");
		}else{
			console.log("segunda opción sin comedor");
		}
}else if(distancia>10 && costo>1500 && costo<2800){
	turno="doble";
	comedor=0;
	console.log("tercera opción doble turno");
}

/*Ejercicio 3 – Dados distintas tarjetas de crédito, mostrar por consola la cantidad de cuotas 
sin interés según el siguiente criterio.
- Mastercard – hasta 6 cuotas s/interés
- Visa – hasta 9 cuotas s/interés
- Amex – hasta 3 cuotas sin interés
- Todas las demás - 1 cuota sin interés*/

var tarjeta="mastercard";

switch(tarjeta){
	case "otras": console.log("1 cuotas sin interés con todas las tarjetas"); break;
	case "amex": console.log("abonando con Amex hasta 3 cuotas sin interés"); break;
	case "mastercard": console.log("abonando con Mastercard hasta 6 cuotas sin interés"); break;
	case "visa": console.log("abonando con Visa hasta 9 cuotas sin interés"); break;
}
