$('#submit').on('click', e=>{
    e.preventDefault();
    var obligatorio = $('.obligatorio');
    var enviado = $('.enviado')
    var name = $("#name").val();
    var dni = $("#dni").val();
    var patente = $("#patente").val();

    console.log(name);
    console.log(dni);
    console.log(patente);

    if (name == 0 || dni == 0 || patente == 0){
        obligatorio.show();
        enviado.hide();
    }else{
        obligatorio.hide();
        enviado.show();

        let auto = new Auto(name, dni, patente);
        console.log(auto);
    }
});