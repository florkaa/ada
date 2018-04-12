var animales=[

{
	nombre: "perro",
	cantPatas: 4,
	alimentacion: "vegetariano",
	saludar: function(saludar){
		console.log('hola soy'+ this.nombre)
	},
	vuela: false,
},

{
	nombre: "cacatúa",
	cantPatas: 2,
	alimentacion: "vegetariano",
	saludar: function(saludar){
		console.log('hola soy'+ this.nombre)
	},
	vuela: true,
},

{
	nombre: "león",
	cantPatas: 4,
	alimentacion: "carnívoro",
	saludar: function(saludar){
		console.log('hola soy'+ this.nombre)
	},
	vuela: false,
},

{
	nombre: "elefante",
	cantPatas: 4,
	alimentacion: "vegetariano",
	saludar: function(saludar){
		console.log('hola soy'+ this.nombre)
	},
	vuela: false
},
{
	nombre: "iguana",
	cantPatas: 4,
	alimentacion: "vegetariano",
	saludar: function(saludar){
		console.log('hola soy'+ this.nombre)
	},
	vuela: false,
}
];

for(var i=0; i<animales.length; i++){
	if(animales[i].cantPatas>=2 && animales[i].alimentacion=="vegetariano"){
		console.log(animales[i].nombre+" sube al arca de Noé");
	}else{
		console.log(animales[i].nombre+" muere");
	}
}