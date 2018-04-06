/* imprimir numeros del 1 al 10 */

num = 1;

while((num>0) && (num<=10)){
	console.log("número "+num);
	num++; //postacción después.
}

/* imprimir los primeros 50 números pares */

num = 0;

while(num<=50){
	if(num%2==0){
	console.log("número "+num);
	}	
	num++; //postacción después.
}


/* FOR */
//	inicio, condición, y postacción

var i;

for (i = 1; i<=50; i++) {
	if(i%2==0){
	console.log(i);
	}	
}

// Determinar si el número es primo 

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


/* FOR FIBONACCI */
//	inicio, condición, y postacción


var cont=0;
var x=1;
var y=0;

for(var i=0; i<10; i++){
	console.log(cont);
	y=cont;
	cont=cont+x;
	x=y;
}

/*
i 	cont	x	y
0	 0		1	0 --inicial--
	 1		0	0 --lectura--
1	 1		1	1
2	 2		1	1
3	 3		2	2
4	 5		3	3
5	 8		5	5
6	 13		8	8
7	 21		13	13
8	 34		21	21
*/



var numero = 0;
var firstNum=-1;
var lastNum=1;

while(numero<30){
	numero = firstNum + lastNum;
	firstNum = lastNum;
	lastNum = numero;
	console.log(numero);
}

/* 
numero 		firstNum 		lastNum
  0			   -1				1	   --versión inicial.
  				1				0	   --primera lectura.
  1				0				1
  1				1				1
  2				1				2
  3				2				3
  5				3				5
  8				5				8
  13			8				13
*/

// ARRAYS
// índice de 0 a n-1


var semana=[15.20, 25.00, 30.50, 21.30, 17.00, 18.00]; // n: tamaño (6 elementos). i: índice.

for(i=0; i<semana.length; i++){ //mostrar todos los índices.
	console.log(semana[i]);
}

var semana=[15.20, 25.00, 30.50, 21.30, 17.00, 18.00];

var i = 0
while (i < semana.length) {
  console.log(semana[i])
  i++
}


