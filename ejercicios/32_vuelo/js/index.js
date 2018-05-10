var jsonFlight;
var flights = [];
var saved = localStorage.getItem('flights');

//localStorage.clear();

console.log(saved);
console.log(flights);

$('#buy').on('click', function(e){
    if(validate()==true){
        createJSON();
    }else{
        e.preventDefault();
    }
});

function validate(){
    var obligatorio = $('.obligatorio')
    for(var i=0; i<obligatorio.length; i++){
        var origen = $("#origen").val();
        var destino = $("#destino").val();
        var fecha = $("#date").val();
        var cantidad = $("#cant").val();
        var asiento = $(".seat").filter(':checked').val();

        if (origen == 0){
            let errores = $('.or');
            $.each(errores,function(indice,elemento){
                elemento.textContent = "Campo obligatorio";
            });
            return false;
        }
        if (destino == 0){
            let errores = $('.dest');
            $.each(errores,function(indice,elemento){
                elemento.textContent = "Campo obligatorio";
                $('.obl').hide();
            });
            return false;
        }
        if (fecha == 0){
            let errores = $('.fecha');
            $.each(errores,function(indice,elemento){
                elemento.textContent = "Campo obligatorio";
                $('.obl').hide();
            });
            return false;
        }
        if (cantidad == undefined || cantidad == 0){
            let errores = $('.can');
            $.each(errores,function(indice,elemento){
                elemento.textContent = "Campo obligatorio";
                $('.obl').hide();
            });
            return false;
        }
        if (!$('.seat').is(':checked')){
            let errores = $('.asiento');
            $.each(errores,function(indice,elemento){
                elemento.textContent = "Campo obligatorio";
                $('.obl').hide();
            });
            return false;
        }
    }
    return true;
}

function createJSON(){
    var data = {
        origen: $("#origen").val(),
        destino: $("#destino").val(),
        fecha: $("#date").val(),
        cantidad: $("#cant").val(),
        asiento: $(".seat").filter(':checked').val(),
    };

    flights.push(data);

    jsonFlight = {'flights': flights,
    'total': flights.length,
    }
    let string = JSON.stringify(jsonFlight);

    localStorage.setItem('flights', string);

    $.ajax({
        url: "http://mariabelenalegre.com/adApi/avion/checkPasaje.php",
        type: "post",
        data: jsonFlight,
        success: function (response) {                             
            if(response){                          
                alert("Ok");
                console.log('tamo')
            }else{
                alert("Error");
            }        
        },
        error: function(response) {
            console.log("error");
        }
    }); 
}

// día mínimo

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
document.getElementById("date").setAttribute("min", today);



