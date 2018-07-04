var text = "ababaa";
var text2 = ["ababaa"];
posicion = 5;
inicio = 0;

for (var i = 0; i < text.length - 1; i++) {
  var cont = text.substr(inicio++, posicion--);
  text2.push(cont);
}

var textSeparado = text.split("");
var cont=0;

for (var i = 0; i < text2.length; i++) {
	text3 = text2[i].split("");
	for(var z=0; z<text3.length; z++){
		if(textSeparado[i]==text3[i]){
			cont++
	 		console.log('igualado: '+textSeparado[i]+' '+text3[i])
		}
	}
}
console.log('contador: '+cont)