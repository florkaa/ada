var flowers = ['Alelí', 'Jazmín', 'Magnolia', 'Peonia'];
var select = document.getElementById('choices'); 
select.innerHTML= "";

for(var i = 0; i < flowers.length; i++) {
    var opt = flowers[i];
    select.innerHTML += "<option value=\"" + opt + "\">" + opt + "</option>";
}

$('#cont').on('click', function(){
    $('#choices option').each(function() {
        if($(this).is(':selected')){
            let seleccionada = $('#choices option').filter(':selected').text()
            alert( "Elegiste: "+ seleccionada);
            $('.flowers').innerHTML = $('.'+seleccionada+'').toggleClass('hide');
        }
    })
});

