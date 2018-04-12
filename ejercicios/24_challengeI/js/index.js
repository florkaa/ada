var select = document.getElementById("principal"); 
var plato = ["Tarta de jyq","Ensalada caprese","Milanesa","1/4 de pollo"]; 
select.innerHTML = "";

for(var i = 0; i < plato.length; i++) {
    var opt = plato[i];
    select.innerHTML += "<option value=\"" + opt + "\">" + opt + "</option>";
}

var select = document.getElementById("guarnicion"); 
var guarnicion = ["Ensalada mixta", "Papas fritas", "Puré de zapallo"]; 
select.innerHTML = "";
for(var i = 0; i < guarnicion.length; i++) {
    var opt = guarnicion[i];
    select.innerHTML += "<option value=\"" + opt + "\">" + opt + "</option>";
}

var select = document.getElementById("postre"); 
var postre = ["Flan con crema", "Queso y dulce", "Mousse de chocolate"]; 
select.innerHTML = "";
for(var i = 0; i < postre.length; i++) {
    var opt = postre[i];
    select.innerHTML += "<option value=\"" + opt + "\">" + opt + "</option>";
}

function myFunction() {

	var platoPrincipal = document.getElementById('principal').value;
	document.getElementById("principalEleccion").innerHTML = "★ " + platoPrincipal;

	var guarnicion = document.getElementById('guarnicion').value;
	document.getElementById("guarnicionEleccion").innerHTML = "★ " + guarnicion;

	var postre = document.getElementById('postre').value;
	document.getElementById("postreEleccion").innerHTML = "★ " + postre;
}

var confirmar = document.getElementById('confirmar');
confirmar.addEventListener('click',myFunction);
