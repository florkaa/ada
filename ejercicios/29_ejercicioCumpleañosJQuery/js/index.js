var jsonCumple;
var cumples = [];
var datosGuardados = localStorage.getItem('cumples');

if(datosGuardados == null){
    cumples = [];
}else{
    cumples = JSON.parse(datosGuardados).cumples;
}

console.log(datosGuardados);

$('#Guardar').on('click', function(e){
    var data = {
        nombre: $("#name").val(),
        fechaNac: $("#bday").val(),
        imagen: $("#elegida").val()
    };
	cumples.push(data);

	jsonCumple = {'cumples': cumples,
	'total': cumples.length,
	}

	let string = JSON.stringify(jsonCumple);

	localStorage.setItem('cumples', string);

    //limpia los campos
    var input = $('input');
    $.each(input, function(indice, elemento){
        if (elemento.type != 'button'){
            $(elemento).val('');
        } 
    })
});
$('img').on('click',function(e){
    $("#elegida").val( $(this).data('avatar'));
});

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //enero es igual a 0
var yyyy = today.getFullYear();
 if(dd<10){
        dd='0'+dd
    } 
    if(mm<10){
        mm='0'+mm
    } 

today = yyyy+'-'+mm+'-'+dd;
document.getElementById("bday").setAttribute("max", today);