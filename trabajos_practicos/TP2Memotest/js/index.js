function welcome() {
    var txt;
    var person = prompt("Escribí tu nombre para comenzar a jugar:");
    if(person == null || person == "") {
        txt = "Buu, no sabemos tu nombre, anónimo.";
    }else{
        txt = "¡A disfrutar del juego, " + person + "!";
    }
    document.getElementById("nombre").innerHTML = txt;
}
welcome();

var tiles = ["img/captain.png", "img/captain.png", "img/hulk.png", "img/hulk.png", "img/hawkeye.png", 
              "img/hawkeye.png", "img/thor.png", "img/thor.png", "img/blackwidow.png",
              "img/blackwidow.png", "img/ironman.png", "img/ironman.png"];
var cont = 0;
var tries = 0;
var pairs = 0;
var randomizado = random(tiles);

function random(array) {
    for (var i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
  return array;
}

for(var i = 0; i < randomizado.length; i++) {
    $(".ficha").eq(i).children("img").attr("data-turn", randomizado[i]);
}

var tile = {
                data: "",
                id: null
};

$("img").on("click", function() {
    $(this).effect( "slide", "fast" );
    if(cont < 2 && tile.id != $(this)[0].id && !$(this).hasClass("disabled")){
        $(this).attr("src", $(this).data("turn")); 
        if(tile.data == "") {
            tile.data = $(this).data("turn");
            tile.id = $(this)[0].id;
            cont++;
        }else {
            if(tile.data == $(this).data("turn")) {
                $("#" + tile.id).addClass("disabled");
                $(this).addClass("disabled");
                tile = {
                        data: "",
                        id: null
                };
                cont = 0;
                tries++;
                $(".tries").html(tries);
                pairs++;
            }else {
                const that = $(this);
                setTimeout(function() {
                    that.attr("src", "img/card.png");
                    $("#" + tile.id).attr("src", "img/card.png");
                    tile = {
                        data: "",
                        id: null
                    };
                  cont = 0;
                }, 500);
                cont++;
                tries++;
                $(".tries").html(tries);
            }
        }
    }
    if(tries < 24 && pairs == 6) {
        $(".won").removeClass("hide");
        $('img').unbind("click");
        $( "#dialogWon" ).dialog();
        $('#main').addClass('opacity');
    }else if(tries == 24) {
        $(".lose").removeClass("hide");
        $('img').unbind("click");
        $( "#dialogLose" ).dialog();
        $('#main').addClass('opacity');
    }
});

$(".restart").on("click", function() {
  window.location.reload(true);
});