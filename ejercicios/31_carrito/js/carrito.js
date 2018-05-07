/*
Carrito:
- modificar cantidad.
- vaciar.
- cerrar compra.
*/

let prodStorage = localStorage.getItem('productos');
let productos = JSON.parse(prodStorage).productos;

function cargarProd(){
  $.each(productos, function(index, elem){
    let productId = `product-id-${index}`; //hacer una variable que nos dé un id único usando el index.
    let compra = `<div id="${productId}" class="prodElegido"></div>`; //Agregamos nuestro id al elemento
    let img = `<img src="${elem.img}">`;
    let data = `<p>${elem.codigo}</p>`;
    let nombre = `<p>${elem.nombre}</p>`;
    let cantidad = `<p class='cant edit'>${elem.cantidad}</p>`;
    let editBox = `<input type="number" class="editBox hide">`
    let precio = `<p>$${elem.precio}</p>`;
    let borrar =`<a href="" class="borrar" data-id="${index}"><i class="fas fa-trash"></i></a>`;

    $('.empty').remove();
    $('.productos').append(compra);
    $(`#${productId}`).append(img);
    $(`#${productId}`).append(nombre);
    $(`#${productId}`).append(cantidad);
    $(`#${productId}`).append(editBox);
    $(`#${productId}`).append(precio);
    $(`#${productId}`).append(borrar);
  });
  console.log(productos);
}
cargarProd();

$('.borrar').on('click', function(event) {
  event.preventDefault();

  let li = $(this);
  let remove = li.parent().index();
    li.parent().remove();
    let indice = li.data('id');
    productos.splice(remove,1);
    let json = JSON.parse(prodStorage);
    json.productos = productos;
    json.total =  productos.length;
    let string = JSON.stringify(json);
    localStorage.setItem('productos', string);
});

$('.edit').on('click', function() {
  var currentValue = $(this).parent('.prodElegido').children('p').html(); 
  $(this).parent('.prodElegido').children('.editBox').val(currentValue).removeClass('hide');
  $(this).parent('.prodElegido').children('.cant').addClass('hide');

  $('.editBox').on('keypress', function(e) {
    var inputValue = e.target.value;
    if (e.keyCode == 13) { // 13 es el identificado del enter.
      $(this).parent('.prodElegido').children('.cant').html(inputValue).removeClass('hide'); 
      $(this).parent('.prodElegido').children('.editBox').addClass('hide');
    }
  });

  let li = $(this);
  let edit = li.parent().index();
  let indice = li.data('id');
  let json = JSON.parse(prodStorage);
  json.productos = productos;
  json.total =  productos.length;
  let string = JSON.stringify(json);
  localStorage.setItem('productos', string);
});

function total(){
  let subt = 0;
  let envio = 150;
  let total = 0;
  $.each(productos, function(index, elem){
    subt += Number(productos[index].precio*productos[index].cantidad);
    total = subt + envio;
  });
  $('.subtotal').append(subt);
  $('.envio').append(envio);
  $('.totalFinal').append(total);
};
total();
