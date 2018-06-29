var jsonHeart;
var heart = [];
var heartList = localStorage.getItem('heart');
var box = $('.each');

/* Generamos el breadcrum */
$(document).ready(function() {  
    var initial_url = location.href.replace(/https?:\/\//i, "")
    var url = initial_url.split('/');
    let htmltoappend = '';
    for(var i=0; i<url.length; i++){
        if(url[i]=="localhost:3000"){
            htmltoappend += `<a href='http://`+url[i]+`'> home</a>`;
        }else if(url[i]=="adopcion"){
            htmltoappend += `<a href='/adopciones'> / adopciones</a>`;
        }else{
             htmltoappend += `<span> / `+url[i]+`</span>`;
        }
    }
    $('.breadcrumb').append(htmltoappend);
});

/* si nuestro localStorage no está vacío, lo pareceamos y borramos el div que estaba en el lugar de nuestros favoritos */
if(heartList !== null){
    heart = JSON.parse(heartList).heart;
    $(".vacio").remove();
}

/* Genera el localStorage donde guardaremos los likes */
$('.heart').click(function () {
	event.preventDefault();
	$(this).html(`<i class="fas fa-heart red"></i>`);
    var liked = { 
    	img: $(this).siblings(".imgPet").children('img').prop('src'),
    	code: $(this).closest('div[data-id]').data('id'),
    	name: $(this).siblings(".name").html(),
    }
	heart.push(liked);
	jsonHeart = {
		    'heart': heart,
		    'total': heart.length
	}
	let string = JSON.stringify(jsonHeart);
	localStorage.setItem('heart', string);
});

/* Mostramos los favs */
function mostrarFavs() {
  $.each(heart, function(index, elem) {
    let htmltoappend = `<div class="each"><img class="img-fav" src="${elem.img}">`
    htmltoappend += `<p>${elem.name}</p>`;
    htmltoappend += `<a href='adopciones/${elem.code}'><button>Más info</button></a></div>`;
    $(".favs").append(htmltoappend);
  });
}
mostrarFavs();