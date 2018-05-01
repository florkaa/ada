let cumplesStorage = localStorage.getItem('cumples');

let cumples = JSON.parse(cumplesStorage).cumples;

function cumpleDelDia(){
	let bday = false;
	let htmlToAppend = '';
	for (let indice = 0; indice < cumples.length; indice++) {
		
		let today = getTodayFormatted();

		let fechaNac = cumples[indice].fechaNac;

		if(today===fechaNac){
			let cumpleHoyImg = cumples[indice].imagen;
			let cumpleHoyNombre = cumples[indice].nombre;
			htmlToAppend += `<h2>hoy es el cumple de:</h2>`;
			htmlToAppend += `<h1>${cumpleHoyNombre}</h1>`;
			htmlToAppend += `<img src="img/Lego ${cumpleHoyImg}.png">`;
			bday = true;
		}
	}
	if(bday===false){
		htmlToAppend += `<h2>hoy no cumple nadie <i class="far fa-frown"></i></h2>`
	}
	$('#cumple-hoy').append(htmlToAppend);
}
cumpleDelDia();

function proximosCumples(){
	$.each(cumples, function(index, elem){
		let li = `<li><p><span>${elem.fechaNac}</span>
				 ${elem.nombre}</p> <a href="/" class="borrar" data-id="${index}"><i class="fas fa-times"></i></a></li> `;
		$('#cumples').append(li);
	});
}
proximosCumples();

$('.borrar').on('click', function(event) {
	event.preventDefault();

	let li = $(this);

    li.parent().remove();
    let indice = li.data('id');
    cumples.splice(indice,1);
    let json = JSON.parse(cumplesStorage);
    json.cumples = cumples;
    json.total =  cumples.length;
    let string = JSON.stringify(json);
    localStorage.setItem('cumples', string);
});


function getTodayFormatted() {
    let today = new Date();
    let month = today.getMonth() + 1;
    let day = today.getDate();
    let year = today.getFullYear();

    if (month < 10) month = '0' + month;
    if (day < 10) day = '0' + day;

    return [year, month, day].join('-');
}
