let jsonProd;
let productos = [];
let carrito = localStorage.getItem('productos');
console.log(carrito)

$('#addCart').on('click', e=>{
	e.preventDefault();
    let item = {
        codigo: $(".codigo").html(),
        nombre: $(".nombre").html(),
        precio: $(".precio").html(),
        img: $(".imgProd").attr("src"),
    };
    console.log(item)
    productos.push(item);
        jsonProd = {
            'productos': productos,
            'total': productos.length,
        }

        let string = JSON.stringify(jsonProd);

        localStorage.setItem('productos', string);
});

let prod = JSON.parse(carrito).productos;

function cargarCarrito(){
	$.each(prod, function(index, elem){
		let htmlToAppend;
		let productId = `product-id-${index}`;
		let div =`<div id="${productId}" class="prodElegido"></div>`;
		htmlToAppend = `<figure><img class="img-carrito" src="${elem.img}"></figure>`;
		htmlToAppend += `<p>${elem.nombre}</p>`;
		htmlToAppend += `<p>${elem.precio}</p>`;
		htmlToAppend += `<p>#${elem.codigo}</p>`;
		$('.prodCarrito').append(div);
		$(`#${productId}`).append(htmlToAppend);
	})
}
cargarCarrito();