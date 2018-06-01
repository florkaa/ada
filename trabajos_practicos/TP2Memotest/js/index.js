var tiles = ["img/captain.png", "img/captain.png", "img/hulk.png", "img/hulk.png", "img/hawkeye.png", 
              "img/hawkeye.png", "img/thor.png", "img/thor.png", "img/blackwidow.png",
              "img/blackwidow.png", "img/ironman.png", "img/ironman.png"];
var cont = 0;
var tries = 0;
var pairs = 0;
var randomizado = random(tiles);

function welcome(){
    let htmlToAppend;
    let htmlToAppend2;
    $("#dialogName").dialog();
    $('#main').addClass('opacity');

    $('.start').on('click', e=>{
        $('#main').removeClass('opacity');
        $('.ui-dialog').addClass('hide');
        let txt = $('.name').val();
        var level = $('#level').val();

        if(txt==null || txt==""){
            htmlToAppend = "anónimo";
        }else{
            htmlToAppend = txt;
        }
        $(".nombre").html(htmlToAppend)

        if(level=="easy"){
            htmlToAppend2 = "fácil";
        }else if(level=="normal"){
            htmlToAppend2 = "intermedio";
        }else if(level=="hard"){
            htmlToAppend2 = "experto";
        }
        $(".nivel").html(htmlToAppend2)
    })
}
welcome();

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
    $(this).effect( "bounce", "slow" );
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
    let level = $('.nivel').html();
    if(level=="fácil"){
        if(tries < 18 && pairs == 6) {
            won();
        }else if(tries == 18) {
            lose();
        }
    }else if(level=="intermedio"){
        if(tries < 12 && pairs == 6) {
            won();
        }else if(tries == 12) {
            lose();
        }
    }else if(level=="experto"){
        if(tries < 8 && pairs == 6) {
            won();
        }else if(tries == 8) {
            lose();
        }
    }
});

function won(){
    $('.won').removeClass("hide");
    $('img').unbind("click");
    $('#dialogWon').dialog();
    $('#main').addClass('opacity');  
}

function lose(){
    $('.lose').removeClass("hide");
    $('img').unbind("click");
    $('#dialogLose').dialog();
    $('#main').addClass('opacity');  
}

$(".restart").on("click", function() {
  window.location.reload(true);
});