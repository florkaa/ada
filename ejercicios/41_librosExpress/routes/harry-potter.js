var express = require('express');
var router = express.Router();

var libros  =  [{	url: "/harry-potter/",
					cod: "9788498386561", 
					img: "images/harry-potter/01.jpg", 
					nombre : "Harry Potter and the Philosopher's Stone", 
					precio: "$350",
					descripcion: "Harry vive con sus horribles tios y el insoportable primo Dudley, hasta que su ingreso en el Colegio Hogwarts de Magia y Hechiceria cambia su vida para siempre. Alli aprendera trucos y encantamientos fabulosos, y hara un punado de buenos amigos... aunque tambien algunos temibles enemigos. Y, sobre todo, conocera los secretos que lo ayudaran a cumplir con su destino."
				},
				{	url: "/harry-potter/",
					cod: "9788498386585",  
					img: "images/harry-potter/02.jpg", 
					nombre : "Harry Potter and the Chamber of Secrets", 
					precio: "$350",
					descripcion: "Mientras Harry espera impaciente en casa de sus insoportables tíos el inicio del segundo curso del Colegio Hogwarts de Magia y Hechiceria, un elfo aparece en su habitación y le advierte de que una amenaza mortal se cierne sobre la escuela. Harry no se lo piensa dos veces y, acompanado de Ron, se dirige a Hogwarts en un coche volador. Allí, Harry oye extraños susurros en los pasillos desiertos y, de pronto... los ataques comienzan. La siniestra predicción del elfo parece hacerse realidad."
				},
				{	url: "/harry-potter/",
					cod: "9788498386608",  
					img: "images/harry-potter/03.jpg", 
					nombre : "Harry Potter and the Prisoner of Azkaban", 
					precio: "$350", 
					descripcion: "De la prision de Azkaban se ha escapado un terrible villano, Sirius Black, un asesino en serie que fue complice de lord Voldemort y que, dicen los rumores, quiere vengarse de Harry por haber destruido a su maestro. Por si esto fuera poco, entran en accion los dementores, unos seres abominables capaces de robarles la felicidad a los magos y de eliminar todo recuerdo hermoso de aquellos que se atreven a acercarseles. El desafio es enorme, pero Harry, Ron y Hermione son capaces de enfrentarse a todo esto y mucho mas."
				},
				{	url: "/harry-potter/",
					cod: "9788498386622",  
					img: "images/harry-potter/04.jpg", 
					nombre : "Harry Potter and the Goblet of Fire", 
					precio: "$350",
					descripcion: "Otro deplorable verano con los Dursley llega a su fin y Harry esta impaciente por regresar a Hogwarts. A sus catorce anos, solo desea ser un joven mago como los demas y dedicarse a aprender nuevos sortilegios y asistir a los Mundiales de quidditch. Sin embargo, en Hogwarts le espera un desafio de grandes proporciones, por lo que tendra que demostrar que ya no es un nino y que esta preparado para vivir las nuevas y emocionantes experiencias que el futuro le depara."
				},
				{	url: "/harry-potter/",
					cod: "9788498386646",  
					img: "images/harry-potter/05.jpg", 
					nombre : "Harry Potter and the Order of the Phoenix", 
					precio: "$350",
					descripcion: "Las vacaciones de verano aun no han acabado y Harry se encuentra mas inquieto que nunca. Apenas ha tenido noticias de Ron y Hermione, y presiente que algo extrano esta sucediendo en Hogwarts. No bien empieza el nuevo curso, sus temores se vuelven realidad: el Ministerio de Magia ha iniciado una campana de desprestigio contra el y Dumbledore, para lo cual ha asignado a la horrible profesora Dolores Umbridge la tarea de vigilar sus movimientos. Y por si fuera poco, Harry sospecha que Voldemort es capaz de adivinar sus pensamientos con el fin de apoderarse de un objeto secreto que le permitiria recuperar su poder destructivo."
				},
				{	url: "/harry-potter/",
					cod: "9788498386660",  
					img: "images/harry-potter/06.jpg", 
					nombre : "Harry Potter and the Half-Blood Prince", 
					precio: "$350",
					descripcion: "En medio de graves acontecimientos que asolan el pais, Harry inicia su sexto curso en Hogwarts. El equipo de quidditch, los examenes y las chicas lo mantienen ocupado, pero la tranquilidad dura poco. A pesar de los ferreos controles de seguridad, dos alumnos son brutalmente atacados. Dumbledore sabe que, tal como se anunciaba en la Profecia, Harry y Voldemort han de enfrentarse a muerte. Asi pues, para intentar debilitar al enemigo, el anciano director y el joven mago emprenderan juntos un peligroso viaje con la ayuda de un viejo libro de pociones perteneciente a un misterioso personaje, alguien que se hace llamar Principe Mestizo."
				},
				{	url: "/harry-potter/",
					cod: "9788498386684",  
					img: "images/harry-potter/07.jpg", 
					nombre : "Harry Potter and the Deathly Hallows", 
					precio: "$350",
					descripcion: "La fecha crucial se acerca. Cuando cumpla los diecisiete, Harry perdera el encantamiento protector que lo mantiene a salvo. El anunciado combate a muerte con Voldemort es inminente, y la casi imposible mision de encontrar y destruir los Horrocruxes restantes es mas urgente que nunca. Ha llegado el momento de tomar las decisiones mas dificiles. Harry debe abandonar la calidez y seguridad de La Madriguera para emprender sin miedo ni vacilaciones el inexorable sendero trazado para el. Consciente de lo mucho que esta en juego, solo dentro de si mismo encontrara la fuerza que lo impulsara en la vertiginosa carrera hacia un destino desconocido."}];


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('list', { title: 'Harry Potter', libros: libros });
});

router.get('/:isbn', function(req, res, next){
	if(isNaN(req.params.isbn)){
		res.send('error')
	}else{
	  let books = search(req.params.isbn)
	  console.log(books)
	  res.render('product', { books: books });
  }
})

function search(isbn){
	for(var i=0; i<libros.length; i++){
		if(isbn == libros[i].cod){
			return libros[i];
		}
	}
	return res.render('error');
}

module.exports = router;
