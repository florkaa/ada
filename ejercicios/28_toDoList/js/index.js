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
      text.className="text";
      var rem = document.createElement("a");
      rem.innerHTML='<i class="fas fa-trash can"></i>';
      rem.className="borrar";
      var edit = document.createElement("a");
      edit.innerHTML = '<i class="fas fa-pencil-alt"></i>';
      edit.className = 'edit';
      contenedor.appendChild(checkbox);
      contenedor.appendChild(text);
      contenedor.appendChild(rem);
      contenedor.appendChild(edit);
    }
    contenedorDiv.appendChild(contenedor);
  }
}

var btnPublicar = document.getElementById("add");
btnPublicar.addEventListener("click", publicar);




var text = $('.text');
var task = $('.task');


$(document).ready(function() {
    var editInput = $('<input type="text" class="editBox" value="'+$(".task").val(text)+'">');

    $('#add').on('click', function() {
        $('a').on('click', function () {
            event.preventDefault();
        });
        $('.borrar').on('click', function() {
            $(this).parent('.task').remove();
        });
        $('.edit').on('click', function(){
          // cargar input sobre el task y se edita.
            $(".text").replaceWith(editInput);
        });    
    });
});

/*


$('#add').on('click', function(event){
  var text = $('#nueva').val();
  arrayPubli.push(text);
  var li = '<li id="'+arrayPubli.length+'">'+text+'<button class="borrar" data-accion="borrar" 
  data-id="'+arrayPubli.length+'">X</button></li>';
  $('#to-do').append(li);
});

$(document).on('click', 'ul button', function(){
  var accion =$(this).data('accion');
  if(accion=="borrar"){
    $(this).parent('.task').remove();
  }else{
    var id = "$(this).data('id');
  };
});

*/
