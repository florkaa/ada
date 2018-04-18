var x = document.createElement("INPUT");
x.setAttribute("type", "date");

function limpiar(){
	var inputs=array.for(document.getElementsByTagName('input'));
	var inputsArray=Array.from(inputs);
	inputsArray.forEach(function(e){
		e.value="";
		e.checked=false;
	});	
	var selects = document.getElementsByTagName('select');
	Array.form(selects).forEach(function(e){
		e.value="-1";
	});
}

var input=document.getElementById('clean');
	input.addEventListener('click', limpiar)
