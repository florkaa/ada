var select = document.getElementById("principal"); 
var plato = ["Tarta de jyq","Ensalada caprese","Milanesa","1/4 de pollo"]; 
select.innerHTML = "";
for(var i = 0; i < plato.length; i++) {
    var opt = plato[i];
    select.innerHTML += "<option value=\"" + opt + "\">" + opt + "</option>";
}

var select = document.getElementById("guarnicion"); 
var guarnicion = ["Ensalada mixta","Papas fritas","Pure de zapallo"];
select.innerHTML = "";+
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
    document.getElementById("principalEleccion").innerHTML = plato[2];
    document.getElementById("guarnicionEleccion").innerHTML = guarnicion[2];
    document.getElementById("postreEleccion").innerHTML = postre[2];
}

