
/* 1- Dada una variable x, determinar si es par o impar. */

x = 14;

  if(x % 2 == 0) {
    console.log("El número es par");
  }
  else {
    console.log("El número es impar");
  }

/* 2- Dada una variable y que puede contener un número de 1 a 7, 
determinar a que día de la semana corresponde. 
Incluir la opción si la variable toma un valor no válido (por ejemplo 0 u 8).*/

var semana=["lunes", "martes", "miércoles", "jueves", "viernes", "sábado", "domingo", "inválido"];
var dia="martes";

if(semana.indexOf(dia)==-1){
	console.log("ese día no existe");
}else{
	console.log("El día es "+semana[semana.indexOf(dia)])
}

/* 3- Dada una variable donde se ingresa el nombre del mes, 
devolver la cantidad de días correspondiente. */

mes = "febrero";

if(mes=="enero" || mes=="marzo" || mes=="mayo" || mes=="julio" || mes=="agosto" 
	|| mes=="octubre" || mes=="diciembre"){
	console.log("31 días");
}else if(mes=="febrero"){
	console.log("28 días");
}else{
	console.log("30 días");
}

/* 4- Dados tres números determinar si es positivo o negativo. */

x=-3;

if(x>0){
	console.log("Es positivo");
}else{
	console.log("Es negativo");
}

/* 5- Dada una variable que puede ser una letra, determinar si es una vocal. */

var vocales = ["a","e","i","o","u"];
var x = "a";
var i;
var es=vocales.indexOf(x);

if(es!=-1){
	console.log("es vocal");
}else{
	console.log("no es vocal");
}

/* 6- Dados tres números, x y z, si x es mayor que y calcular 
la resta entre x y z, y determinar si eso es mayor que y, 
de lo contrario sumar x y z (x+z) y multiplicarlo por y. */
x = 10;
y = 5;
z = 2;
q = 0;

if(x > y){
	q = x-z;
	if(q>y){
		console.log("q es mayor que y");
	}else{
	q = (x + z) * y;
	console.log("q es igual a" + q);
	}
}

/* 7- Que calcule el sueldo que le corresponde al trabajador 
de una empresa que cobra 40.000 euros anuales, 
se deben realizar los cálculos en función de los siguientes criterios:
a. Si lleva más de 10 años en la empresa se le aplica un aumento del 10%.
b. Si lleva menos de 10 años pero más que 5 se le aplica un aumento del 7%.
c. Si lleva menos de 5 años pero más que 3 se le aplica un aumento del 5%. 
d. Si lleva menos de 3 años se le aplica un aumento del 3% */

sueldo = 40000;
antiguedad = 4;

if(antiguedad > 10){
	aumento = sueldo + (sueldo*10/100);
}else if(antiguedad < 10 && antiguedad > 5){
	aumento = sueldo + (sueldo*7/100);
}else if(antiguedad < 5 && antiguedad > 3){
	aumento = sueldo + (sueldo*5/100);
}else{
	aumento = sueldo + (sueldo*3/100);
}

console.log("Su nuevo sueldo es de €"+aumento+" anuales");

