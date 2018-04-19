var publicacion1 = "I would like to meet you to discuss the latest news about the arrival of the new theme. They say it is going to be one the best themes on the market.";
var posts = [publicacion1];
var wallPost = document.getElementById("posts")

function cargarChat(posts){

	for(var i=0; i<posts.length; i++){

		var eachPost = document.createElement("div");
			eachPost.className="eachPost item";

		var img = document.createElement("img"); //imagen posts
			img.src = 'dist/img/user4-128x128.jpg';
			img.className="offline";
			img.setAttribute("alt", "user image");
		eachPost.appendChild(img);

		text = document.createElement("p"); //div derecho
		text.className="message";
			nombre = document.createElement("a"); // a
			nombre.className="name";
			nombre.textContent="Mike Doe";
			time = document.createElement("small");
			time.className="text-muted pull-right";
			time.textContent='2:15';
			nombre.appendChild(time);
			parrafo = document.createElement("p"); // párrafo
			parrafo.textContent=posts[i];
		text.appendChild(nombre);
		text.appendChild(parrafo);
		

		eachPost.appendChild(img);
		eachPost.appendChild(text);
	}	
	wallPost.appendChild(eachPost);
}
cargarChat(posts);


function publicar(){
	var entrada = document.getElementById("entrada");
	var texto = entrada.value;

	posts.push(texto);

	cargarChat(posts);

	document.getElementById("entrada").value = "";
}
	
var btnEnviar = document.getElementById('enviar');
btnEnviar.addEventListener('click',publicar);


function validateForm() {
    var x = document.forms["myForm"]["emailto"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;

    var y = document.forms["myForm"]["subject"].value;
    if (y == "") {
        alert("Name must be filled out");
        return false;
    }
    }
}


$(document).ready(function() {
    var items = [];
    $('#add').on('click', function() {
        $('a').on('click', function () {
            //evito el normal funcionamiento del evento, e intervengo con mi
            //evento
            event.preventDefault();
            $(this).addClass('linea');
        });
        $('.borrar').on('click', function() {
            // alert("Item borrado.");
            $(this).parent('li').hide();
            console.log($(this).parent());
            //$(this).remove();
        });
    });
});