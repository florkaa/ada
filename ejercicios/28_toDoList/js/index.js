var arrayPubli = [];

function publicar() {
  var entrada = document.getElementById("entrada"); //me traigo el node , (input)
  var texto = entrada.value; //le pongo un texto al nado

  arrayPubli.push(texto); //me agrega elementos al final, va agregando elementos
  cargarMuro(arrayPubli);

  document.getElementById("entrada").value = ""; // para que me borre lo que escribi
}

function cargarMuro(arrayPubli) {
  var contenedorDiv = document.getElementById("lista");

  if (arrayPubli.length > 0) {
    for (var i = 0; i < arrayPubli.length; i++) {
      var contenedor = document.createElement("div");
      contenedor.className="task";
      var checkbox = document.createElement("input");
      checkbox.setAttribute("type", "checkbox");
      checkbox.className="check";
      var text = document.createElement("span");
      text.textContent = arrayPubli[i];
      contenedor.appendChild(checkbox);
      contenedor.appendChild(text);
    }
    contenedorDiv.appendChild(contenedor);
  }
}

var btnPublicar = document.getElementById("add");
btnPublicar.addEventListener("click", publicar);


$('.check').on('click', function(event){
  event.preventDefault();
 // idTarea = $(this).data('id'); // this el elemento en el que sucede el evento/en el que estás parado
  $('.'.task).hide();
});

