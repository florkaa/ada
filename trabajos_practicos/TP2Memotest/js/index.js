
// 4- Permitir ingresar el nombre del jugador al iniciar el juego [x]

function saludo() {
    var txt;
    var person = prompt("Escribí tu nombre:");
    if (person == null || person == "") {
        txt = "Canceló.";
    } else {
        txt = "¡A disfrutar del juego, " + person + "!";
    }
    document.getElementById("nombre").innerHTML = txt;
}

saludo()

// 2- Deben acomodarse las fichas de forma aleatoria, 
// cada vez que se inicie un nuevo juego.[x]

$('.ada-front').on('click', function(){

        var indice = 0;
        img = new Array();
        img[0] = 'img/feminist.jpg';
        img[1] = 'img/empowered.jpg';
        img[2] = 'img/feminist.jpg';
        img[3] = 'img/adaLovelace.jpg';
        img[4] = 'img/empowered.jpg';
        img[5] = 'img/adaLovelace.jpg';
        img[6] = 'img/chienS.png';
        img[7] = 'img/fundamental.png';
        img[8] = 'img/graceHopper.jpg';
        img[9] = 'img/graceHopper.jpg';
        img[10] = 'img/chienS.png';
        img[11] = 'img/fundamental.png';

        indice = Math.random() * (img.length);
        indice = Math.floor(indice);
        for (i=1;i<=img.length;i++) {
            if (indice == img.length) indice = 0;
            img.src=img[2];
            indice++;
        }
});

// 3- Al completar todos los pares mostrar un mensaje de ganÛ. 
// 5- Tener 24 oportunidades, si no descubre todo el tablero en esa cantidad perder·.

function turnTiles(fichas){

}





