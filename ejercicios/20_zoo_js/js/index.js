/*

Alimentando a los animales del ZOO

Herviboros, carnivoros 
-2 Perezoso, guacamayo, -4 koala, elefante, tigre, -0 boa
Elefante = Babar 
cantidad de patas 
A partir de la cant de patas, kg de comida 


Mostrar pantalla, comida y cant de kilos 

Si tienen 2 patas y herviboro 1.5 kg
Si tienen 4 patas y herviboro 3 kg
Si tienen 4 patas y carnivoro 5 kg
No patas un cobayo
Si elefante o se llama Babar 20 kg

*/

var patas = 4;
var tipo = "herviboro";
var animal = "elefante";
var nombre = "babar";

switch(patas){
	case 0: console.log("cobayo"); break;
	case 2: 
			kilos = 1.5;
			console.log("come "+kilos); break;
	case 4:
			if(tipo=="carnivoro"){
				kilos = 5;
			}else{
				kilos = 3;
					if(animal=="elefante" && nombre=="babar"){
						kilos = 20;
					}
			}
			console.log("come "+kilos+"kg."); break;
}



/*
if(patas>=2){
	if(patas==2){
		console.log("Es herviboro, come 1.5kg");
	}else{
		if(patas==4 && animal=="elefante" && nombre=="babar"){
		console.log("Es herviboro, come 20kg");
		}else{
			if(patas==4 && tipo=="herviboro"){
				console.log("Es herviboro, come 3kg");
			}else{
				console.log("come 5kg")
			}
		}
	}
}
*/








