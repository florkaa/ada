$('.hide').hide();
$('.puertas').hide();

$('#tipo').on('change', e=>{
    var tipo = $('#tipo').val();
    if (tipo=="2"){
        $('.hide').show();
        $('.puertas').hide();
    }else if(tipo=="1"){
        $('.puertas').show();
        $('.hide').hide();
    }
});

$('#submit').on('click', e=>{
    e.preventDefault();
    var obligatorio = $('.obligatorio');
    var enviado = $('.enviado')
    var name = $('#name').val();
    var dni = $('#dni').val();
    var marca = $('#marca').val();
    var modelo = $('#modelo').val();
    var color = $('#color').val();
    var patente = $('#patente').val();
    var tipo = $('#tipo').val();
    

    console.log('datos:'+name, dni, patente, tipo, ejes, puertas);


    if (name == 0 || dni == 0 || patente == 0 || marca == 0 || modelo == 0 || color == 0 || tipo<0){
        obligatorio.show();
        enviado.hide();
    }else{
        obligatorio.hide();
        enviado.show();
        if(tipo=='1'){
            let puertas = $('#puertas').val();
            let vehiculo = new Auto(name, dni, patente, marca, modelo, color, puertas);
            console.log(vehiculo);
        }else if(tipo=='2'){
            let ejes = $('#ejes').val();
            var tara = $('#tara').val();
            let vehiculo = new Camion (name, dni, patente, marca, modelo, color, ejes, tara);
            console.log(vehiculo);
        };
        //limpiar inputs y selects
        var input = $('input');
        $.each(input, function(indice, elemento){
            if (elemento.type != 'button'){
                $(elemento).val('');
            } 
        });
        var select = $('select');
        $.each(select, function(indice, elemento){
            if (elemento.type != 'button'){
                $(elemento).val('-1');
                $('.hide').hide();
            } 
        })
    }
});