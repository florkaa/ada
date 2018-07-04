// function FooBar(num){
// 	var numeros = []
// 	for(var i=1; i<=num; i++){
// 		if(i%5===0 && i%3===0){
// 			numeros[i]="FooBar"
// 		}else if(i%5===0){
// 			numeros[i]="Bar"
// 		}else if(i%3===0){
// 			numeros[i]="Foo"
// 		}else{
// 			numeros[i]= i
// 		}
// 	}
// 	return numeros
// }

// console.log(FooBar(15))


function FooBar(num){
	var numeros = []
	for(var i=1; i<=num; i++){
		if(i%3===0){
			numeros[i]="Foo"
		}
		if(i%5===0){
			numeros[i] = (numeros[i] || "")+"Bar"
		}
		numeros[i] = !numeros[i] ? i : numeros[i]
	}
	return numeros
}

console.log(FooBar(15))
