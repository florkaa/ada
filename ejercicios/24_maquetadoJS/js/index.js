// BIO. -- 1

var nombre = document.createElement("P");
var text = document.createTextNode("Florencia Caputti.");
nombre.appendChild(text);
document.getElementById("bio").appendChild(nombre);

var fechaNac = document.createElement("P");
var text = document.createTextNode("15 de mayo de 1991.");
fechaNac.appendChild(text);
document.getElementById("bio").appendChild(fechaNac);

var ubicacion = document.createElement("P");
var text = document.createTextNode("Buenos Aires, Argentina.");
ubicacion.appendChild(text);
document.getElementById("bio").appendChild(ubicacion);

// POSTS -- 2.
var eachPost = document.createElement("div");
eachPost.className="eachPost";

	postPic = document.createElement("div"); //div izquierdo
	postPic.className="postPic";
eachPost.appendChild(postPic);
	var img = document.createElement("img"); //imagen posts
	img.src = 'img/florka.jpg';
	postPic.appendChild(img);

	text = document.createElement("div"); //div derecho
	text.className="text";
		h3 = document.createElement("h3"); //crear h3
		var titulo = document.createTextNode("Buenos Aires, Argentina.");
		h3.appendChild(titulo);
	text.appendChild(h3);

		parrafo = document.createElement("p"); //crear párrafo
		var textoPost = document.createTextNode("lkadmngla");
		parrafo.appendChild(textoPost);
	text.appendChild(parrafo);
		parrafo = document.createElement("p"); // otro párrafo
		var textoPost = document.createTextNode("adkngk.");
		parrafo.appendChild(textoPost);
	text.appendChild(parrafo);
eachPost.appendChild(text);

document.getElementById("posts").appendChild(eachPost);

// AMIGOS -- 3.
var images = document.createElement("div");
images.className = "images";
	var img = document.createElement("img");
	img.src = 'img/tom.jpg';
	images.appendChild(img);
	var img = document.createElement("img");
	img.src = 'img/tom.jpg';
	images.appendChild(img);
	var img = document.createElement("img");
	img.src = 'img/tom.jpg';
	images.appendChild(img);
	var img = document.createElement("img");
	img.src = 'img/tom.jpg';
	images.appendChild(img);
	var img = document.createElement("img");
	img.src = 'img/tom.jpg';
	images.appendChild(img);
	var img = document.createElement("img");
	img.src = 'img/tom.jpg';
images.appendChild(img);
document.getElementById("friends").appendChild(images);

var a = document.createElement("a");
a.href = '/more';
var text = document.createTextNode("ver más");
a.appendChild(text);
document.getElementById("friends").appendChild(a);


// SEND POST -- 4.
var postText = document.createElement("input");
	postText.className="postText";
	postText.setAttribute('type',"text");
	postText.setAttribute('value',"¿Qué onda?");

var postSend = document.createElement("input");
	postSend.className="postSend";
	postSend.setAttribute('type', "submit");
	postSend.setAttribute('value', "enviar");

document.getElementById("sendPost").appendChild(postText);
document.getElementById("sendPost").appendChild(postSend);


/*
var h1 = document.getElementbyId("nombre"); //llama al id del html
var nombre=h1.textContent; //te quedas con el texto que tiene dentro
var h2=document.getElementbyID("edad");
document.getElementsbyClassName("images") //llama a los elementos de la clase
document.getElementsbyTagName(div) //llama a un tag entero, por ejemplo: div, a, img.
var div1 = document.createElement("div") --> creo un div.
var perfil = document.getElementbyId("perfil");
perfil.append(div1) --> agrego el div al div id Perfil.
*/