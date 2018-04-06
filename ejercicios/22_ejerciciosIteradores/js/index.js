/* Ejercicio 1 - Cargar de forma automática incremental, un array de números a partir de un largo
dado por el usuario. */

var n=10;
var numeros =[];

for(i=0;i<n;i++){
	numeros[i]=i;
	console.log(numeros[i]);
}

/* Ejercicio 2 - Repetir el ejercicio anterior, ubicando 0 (ceros), 
en las posiciones pares y un valor que coincida con el índice en las posiciones impares.*/

var n=10;
var numeros=[];

for(i=0;i<n;i++){
	if(i%2==0){
		numeros[i]=0;
		console.log(numeros[i]);	
	}else{
		numeros[i]=i;
		console.log(numeros[i]);
	}
}

/*  Ejercicio 3 - Dado el siguiente arreglo de números x = [10,24,36,7,98,11,14,20], 
mostrar por pantalla el valor máximo. 
	Ejercicio 4 - Dado el arreglo de números del punto 3, 
mostrar por pantalla el valor máximo y su posición.*/

var array = [10,24,36,7,98,11,14,20];
var maximo = array[0];
var posicion = 0;

for (x = 1; x < array.length; x++){
	if (array[x]>maximo){
		maximo = array[x];
		posicion = x;
	}
}
console.log("el número máximo es: "+maximo+" y su posición es: "+posicion);


/* Ejercicio 5 - Dado el siguiente arreglo de números x = [10,24,36,7,98,11,14,20,98,14,10], 
mostrar por pantalla el valor máximo y la cantidad de veces que se repite.*/

var array = [10,24,36,7,98,11,14,20,98,14,10];
var maximo = array[0];
var i = 0;
var counter = 0;

for (i=0; i < array.length; i++){
	if (array[i]>maximo){
		maximo = array[i];
		counter=1;
		if(array[i]==maximo){
			counter++;
		}
	}
}
//while (i != -1){
//	var i = array.indexOf(repe,i);
//	if (i != -1){
//		i++;
//		counter++;
//	}
//}
console.log("el número máximo es: "+maximo+" y se repite: "+counter+" veces.");




// x = Math.max.apply(null,x); 
// console.log(x);

/* Ejercicio 6 – Dados los siguientes arreglos:
X = [“a”,”l”,”f”,”a”];
Y = [“a”,”l”,”f”,”a”,”j”,”o”,”r”]
Crear un bloque de código que permita determinar si:
• Ambos arreglos son iguales
• Cuál de los dos es más largo
• Cuantas letras tienen en común*/

var x = ["a","l","f","a"];
var y = ["a","l","f","a","j","o","r"];

if(x==y){
	console.log("son iguales");
}else{
	console.log("no son iguales");
}
if(x[i]>y[i]){
	console.log("x es mas largo");
}else{
	console.log("y es mas largo");
}

/* Ejercicio 7 – Dado el siguiente array datos1 = [“Fido”,”Gomez”,26,15000.78,true] 
y datos2 = [“Gervasio”,”Fernandez”,32,28.550,false]
Determinar:
• ¿Cuál de los dos personajes es más viejo?
• ¿Cuál de los dos personajes está casado?
• Si Fido recibirá un aumento equivalente al 12.5% del sueldo de Gervasio, cuanto será el
monto a cobrar?*/

var datos1 = ["Fido", "Gomez", 26, 15000.78, true]
var datos2 = ["Gervasio", "Fernandez", 32, 28550, false]

if(datos1[2]>datos2[2]){
	console.log(datos1[0]+" "+datos1[1]+" es mayor que "+datos2[0]+" "+datos2[1]);
}else{
	console.log(datos2[0]+" "+datos2[1]+" es mayor que "+datos1[0]+" "+datos1[1]);
}
if(datos1[4]==true){
	console.log("quien está casado es "+datos1[0]);
}else{
	console.log("quien está casado es "+datos2[0]);
}
if(datos1[3]){
	datos1[3]=datos1[3] + (datos2[3]*0.125);
	console.log("el nuevo sueldo de Fido es de "+datos1[3])
}



//Encontrar si está Lalo en el array.

var nombres=["Pepe", "Lalo", "Euclides"];
var x="Lalo";
var i=0;
var esta = false;

while(esta==false && i<nombres.length){
	if(nombres[i]==x);{
		esta=true;
	}
	i++
}
if(esta){
	console.log(x+" está");
}

var esta=nombres.indexOf(x);

if(esta!=-1){
	console.log("está");
}

