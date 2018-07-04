var array = [1, 3, 3]
var maximo = array[0];
var posicion = 0;

for (var i = 1; i < array.length; i++){
	if (array[i]>maximo){
		maximo = array[i];
		posicion = i;
	}

}



console.log("el número máximo es: "+maximo+" y su posición es: "+posicion+"el array:"+array);