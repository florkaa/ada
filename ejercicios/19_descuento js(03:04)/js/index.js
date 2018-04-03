/* Dado un monto total, calcular el valor del descuento que se aplicará 
y el monto total a pagar 

Consideraciones:

	Si el monto es menor a 500 no se realizan descuentos.
	Si el monto está entre 501 y 1000 se realiza un 10%.
	Si el monto está entre 1001 y 1500 se realiza un 15%.
	Si el monto es mayor a 1500 se realiza un 20%.

Adicionalmente por pago con tarjeta de crédito en 3 pagos 
se genera un recargo del 5%. */

var valor = 1000;

if(valor < 500){
	descuento = 0;
	valor = valor;
}else if(valor>500 && valor<1000){
	descuento = valor*10/100;
	valor = valor - descuento;
}else if(valor > 1000 && valor < 1500){
	descuento = valor*15/100;
	valor = valor - descuento;
}else{
	descuento = valor*20/100;
	valor = valor - descuento;
}

console.log("El descuento es de $"+descuento+". El precio es de $"+valor+".");

pagoTarjeta = true;
cuotas = 5;

if(pagoTarjeta == true){
	var recargo = 0;
	switch(cuotas){
		case 3: recargo=0.05; break;
		case 4:
		case 5:
		case 6: recargo=0.1; break;
		default: recargo=0; break;
	}
	/*
	if(cuotas == 3){
		recargo = 0.05;
	}
	if(cuotas == 6){
		recargo = 0.1;
	}*/
	valor = valor + recargo*valor;
}
console.log("El precio abonando con tarjeta es de $"+valor+".");



