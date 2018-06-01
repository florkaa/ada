$('.won').hide();
$('.lost').hide();
$('.board').hide();

$('#play').on('click', e=>{
	$('.board').show();
	e.preventDefault();
	tirarDados();
	status();
});

function tirarDados(){
	dado = new Array();
	dado[0] = '<img src="img/dado1.png" alt="">';
	dado[1] = '<img src="img/dado2.jpg" alt="">';
	dado[2] = '<img src="img/dado3.jpg" alt="">';
	dado[3] = '<img src="img/dado4.png" alt="">';
	dado[4] = '<img src="img/dado5.png" alt="">';
	dado[5] = '<img src="img/dado6.png" alt="">';

	var length = dado.length-1;

	indice = Math.random() * length;
    indice = Math.floor(indice);
    for (i=1;i<=length;i++) {
        if (indice == length) indice = 0;
        dado.src=dado[indice];
        indice++;
    }

    indice2 = Math.random() * length;
    indice2 = Math.floor(indice2);
    for (i=1;i<=length;i++) {
        if (indice2 == length) indice2 = 0;
        dado.src=dado[indice];
        indice2++;
    }
    $('.board').append(dado[indice]);
    $('.board').append(dado[indice2]);
}

function status(){
	if(indice+indice2+2=='7'){
		$('.won').show();
		$('.lost').hide();
		$('.board').show();
	}else{
		$('.lost').show();
		$('.won').hide();
		$('.board').show();
	}
}

$(".restart").on("click", function() {
  window.location.reload(true);
});