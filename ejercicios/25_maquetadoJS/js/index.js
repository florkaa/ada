// BIO. -- 1
var arrayDatos = ["Florencia Caputti", "15 de mayo de 1991", "Buenos Aire, Argentina"];

var publicacion1 = "hola";
var posts = [publicacion1];
var wallPost = document.getElementById("posts")

var tom = ["Tom", "img/tom.jpg"];
var nati = ["Nati", "img/nati.jpg"];
var dune = ["Dune", "img/dune.jpg"];
var lista = [tom, nati, dune];

var friends = document.getElementById("friends");
var images = document.createElement("div");
images.className = "images";


function datosPersonales(arrayDatos){
	var nombre = document.createElement("h1");
	nombre.textContent=arrayDatos[0];

	var fechaNac = document.createElement("h2");
	fechaNac.textContent=arrayDatos[1];

	var ubicacion = document.createElement("p");
	ubicacion.textContent=arrayDatos[2];

	var datos=document.getElementById("bio");
	datos.appendChild(nombre);
	datos.appendChild(fechaNac);
	datos.appendChild(ubicacion);
}
datosPersonales(arrayDatos);


// POSTS -- 2.


// VERSIÓN CON LISTA.

/*
var posts = document.getElementById('posts');

function cargarMuro(posts){

	if(entradas.length>0){
		var ul = document.createElement('ul');

		for (var i=0; i<entradas.length; i++){
			var li = document.createElement('li');
			var img = document.createElement ('img');

			var img = document.createElement("img");
			img.src = 'img/florka.jpg';
			img.classList.add('thumb');
			li.appendChild(img);

			var texto = document.createElement("p"); //crear párrafo
			texto.textContent=entradas[i];
			li.appendChild(texto);
			ul.appendChild(li);
		}
		posts.appendChild(ul);
	}
}

cargarMuro(posts);

*/



function cargarMuro(posts){

	for(var i=0; i<posts.length; i++){

		var eachPost = document.createElement("div");
			eachPost.className="eachPost";

		var img = document.createElement("img"); //imagen posts
			img.src = 'img/florka.jpg';
		eachPost.appendChild(img);

		text = document.createElement("div"); //div derecho
		text.className="text";/*
			h3 = document.createElement("h3"); // h3
			h3.textContent=posts[i][1];
		text.appendChild(h3);
			parrafo = document.createElement("p"); // párrafo
			parrafo.textContent=posts[i][2];
		text.appendChild(parrafo);*/

			parrafo = document.createElement("p"); // párrafo
			parrafo.textContent=posts[i];
		text.appendChild(parrafo);

		eachPost.appendChild(img);
		eachPost.appendChild(text);
	}	
	wallPost.appendChild(eachPost);
}
cargarMuro(posts);

// AMIGOS -- 3. 

/* 
 * muestra en el HTML una lista de imágenes.
 * parámetro lista | array, padre | nodo HTML.
 * void
*/

function cargarListaImagenes(lista,padre){

	for(var i=0; i<lista.length; i++){
		var img = document.createElement("img");
		img.src = lista[i][1];
    	images.appendChild(img);
    }
    friends.appendChild(images);
}

cargarListaImagenes(lista,friends);

var a = document.createElement("a");
a.href = '/more';
a.textContent="ver más";
document.getElementById("friends").appendChild(a);


// SEND POST -- 4.


function publicar(){
	var entrada = document.getElementById("entrada");
	var texto = entrada.value;

	posts.push(texto);

	cargarMuro(posts);

	document.getElementById("entrada").value = "";
}
	
var btnEnviar = document.getElementById('enviar');
btnEnviar.addEventListener('click',publicar);


/*
	Formulario hecho con js:

var postText = document.createElement("input");
	postText.className="postText";
	postText.setAttribute('type',"text");
	postText.setAttribute('value',"¿Qué onda?");

var postSend = document.createElement("input");
	postSend.className="postSend";
	postSend.setAttribute('type', "submit");
	postSend.setAttribute('value', "enviar");

	postSend.onclick = send;

document.getElementById("sendPost").appendChild(postText);
document.getElementById("sendPost").appendChild(postSend);
*/ 
