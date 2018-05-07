/* 
Carrito: 
- agregar producto.
- eliminar producto.
- modificar cantidad.
- vaciar.
- calcular total.
- cerrar compra.

Producto (obj):
- código.
- descripción.
- precio.
- cantidad.
- img.
*/
let jsonProd;
let productos = [];
let carrito = localStorage.getItem('productos');
console.log(carrito);
//localStorage.clear();

if(carrito == null){
    productos = [];
}else{
    productos = JSON.parse(carrito).productos;
}

// verifico si ya existe el producto
// si existe, sumo cantidad
// @params producto
// return boolean | index

function chequearExistencia(productos){
    let cod = productos.codigo;
    let find = false;
    let i = 0;
    while(!find && i<productos.length){ // !(find == true).
        if(productos[i].codigo == cod){
            return i; //si lo encuentra, devuelve la posición.
        }
        i++;
    }
    //devuelve falso si no lo encontró
    return find;
}

$(".add").on("click", function(e) {
    let item = {
        codigo: $(this).siblings("p").data("cod"),
        nombre: $(this).siblings(".descripcion").html(),
        precio: $(this).siblings(".precio").html(),
        img: $(this).siblings(".imgProd").attr("src"),
        cantidad: $(this).siblings(".cantidad").val(),
        stock: $(this).siblings(".stock").html(),
    };
	console.log(item);
    
    if (parseInt(item.cantidad) <= parseInt(item.stock) && parseInt(item.cantidad) > 0) {
        
        $(".alertGreen").removeClass("hide");

        let pos = chequearExistencia(productos); // guardamos la posición que nos devolvía la función en una variable.

        if(!pos){
            
            productos.push(item);

        }else{
            productos[pos].cantidad += parseInt($(this).siblings(".cantidad").val());
        }


        jsonProd = {
            'productos': productos,
            'total': productos.length,
        }

        let string = JSON.stringify(jsonProd);

        localStorage.setItem('productos', string);

    } else if (parseInt(item.cantidad) == "0" || parseInt(item.cantidad) == null) {
        $(".alertOrange").removeClass("hide");
    } else if(parseInt(item.cantidad) > parseInt(item.stock) && parseInt(item.cantidad) > 0) {
        $(".alert").removeClass("hide");
    }

    var input = $('input'); //vaciar input
    $.each(input, function(indice, elemento){
        if (elemento.type != 'button'){
            $(elemento).val('');
        } 
    })
});

