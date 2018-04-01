/* Tomar dos variables, si ambas son mayores de 10, 
entonces lo sumo, sino los multiplico*/

x = 5;
y = 12;
z = 0;


if(x>10 && y>10){
	z = x+y; /*ejecuto la suma solo si ambas variables se cumplen*/
}else{
	z = x*y; /*ejecuto siempre que al menos una sea menor que 10*/
}

console.log("El resultado es:" +z);

/*sumar dos variables si al menos una de ellas es mayor que 10
de lo contrario, multiplicarlos*/

if(x>10 || y>10){
	z = x+y; 
}else{
	z = x*y; 
}

console.log("El resultado es:" +z);

/*mostrar mensaje de bienvenida incluyendo nombre y apellido
solo si coinciden con nuestras variables*/

nombre = "Flor";
apellido = "Caputti";
bienvenida =" "
console.log(bienvenida);

if(nombre=="Flor" && apellido =="Caputti"){
	bienvenida ="Bienvenida a ADA, " +nombre+" "+apellido;
	console.log(bienvenida)
}

console.log(bienvenida);
bienvenida=" "

hjyxutylltza
HJYXUTYLLTZA


