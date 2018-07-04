var nombre = $("#nombre").val();
var codigo = $("#cod").val();
var precio = $("#precio").val();
var portada = $("#foto").val();
var descripcion = $("#descripcion").val();

validate(){
	if(nombre==''){
		alert('completa campo')
	}else{
		alert('enviado')
	}
}

$('#send').on('click', e=>{
	e.preventDefault();
	validate();
})

