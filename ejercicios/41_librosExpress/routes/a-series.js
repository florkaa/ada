var express = require('express');
var router = express.Router();

var libros  =  [{	url: "/a-series-of-unfortunate-events/",
					cod: "9781405266062", 
					img: "images/a-series/01.jpg", 
					nombre : "The Bad Beginning", 
					precio: "$259",
					descripcion: "Querido lector, siento decirte que este libro es extremadamente desagradable: cuenta la historia de tres niños con muy mala suerte. Los hermanos Baudelaire son un imán para los desastres. Para empezar, sobreviven a un incendio terrible, se enfrentan a un ser malvado, codicioso y repulsivo, desmontan un complot para despojarlos de su fortuna ¡y se ven forzados a llevar ropa que pica! Yo tengo la triste obligación de poner por escrito estos trágicos acontecimientos, porque soy el autor. Pero a ti nada te impide cerrar inmediatamente este libro y leer algo más alegre, si eso es lo que prefieres. Con todo mi respeto, Lemony Snicket"
				},
				{	url: "/a-series-of-unfortunate-events/",
					cod: "9781405266079",  
					img: "images/a-series/02.jpg", 
					nombre : "The Reptile Room", 
					precio: "$259",
					descripcion: "Querido lector, si has elegido este libro porque tenías ganas de leer algo divertido, te has equivocado. Es verdad que la historia es entretenida al principio, cuando los hermanos Baudelaire pasan un tiempo con su loco Tío Monty y sus reptiles, pero no te dejes engañar. Si conoces algo de los niños Baudelaire, sabrás que hasta las aventuras más divertidas los llevan por el camino más catastrófico. De hecho, en las páginas que tienes en las manos, los tres hermanos casi se estampan con un coche, tienen que soportar una peste horrible, enfrentarse a una serpiente mortal y encontrar a un indeseable que hubieran preferido no volver a ver jamás. Yo no tengo más remedio que dejar constancia de estos trágicos acontecimientos, pero tú eres libre de volver a colocar el libro en la estantería y buscar algo más alegre. Con todo mi respeto, Lemony Snicket."
				},
				{	url: "/a-series-of-unfortunate-events/",
					cod: "9789873820823",  
					img: "images/a-series/03.jpg", 
					nombre : "The Wide Window", 
					precio: "$259", 
					descripcion: "Estimado lector: Si no ha leído nada sobre los huérfanos Baudelaire, entonces, antes de leer una oración más, debe saber esto: Violet, Klaus y Sunny son bondadosos y listos, pero sus vidas, lamento decirlo , están llenos de mala suerte y miseria. Todas las historias sobre estos tres niños son infelices y miserables, y esta puede ser la peor de todas. Si no tienes estómago para una historia que incluye un huracán, un dispositivo de señalización, sanguijuelas hambrientas, sopa fría de pepino , un villano horrible, y una muñeca llamada Pretty Penny, entonces este libro probablemente te llene de desesperación. Continuaré registrando estos cuentos trágicos, porque eso es lo que hago. Sin embargo, usted debe decidir por sí mismo si es posible que pueda soportar esta historia miserable. Con todo respeto, Lemony Snicket"
				},
				{	url: "/a-series-of-unfortunate-events/",
					cod: "9781405266079",  
					img: "images/a-series/04.jpg", 
					nombre : "The Miserable Mill", 
					precio: "$259",
					descripcion: "Querido lector, espero, por su bien, que no haya elegido leer este libro porque está de humor para una experiencia placentera. Si este es el caso, le aconsejo que deje este libro instantáneamente, debido a todos los libros que describen las vidas infelices de los huérfanos Baudelaire, The Miserable Mill podría ser el más infeliz. Violet, Klaus y Sunny Baudelaire son enviados a Paltryville para trabajar en un aserradero, y encuentran el desastre y la desgracia detrás de cada tronco. Las páginas de este libro, lamento informarle, contienen cosas tan desagradables como una máquina gigante de pincher, una mala cazuela, un hombre con una nube de humo donde debería estar su cabeza, un hipnotizador, un terrible accidente que resultó en lesiones, y cupones He prometido escribir la historia completa de estos tres niños pobres, pero no es así, así que si prefiere historias que son más conmovedoras, siéntase libre de hacer otra selección. Con todo el debido respeto, Lemony Snicket"
				},
				{	url: "/a-series-of-unfortunate-events/",
					cod: "9781405266116",  
					img: "images/a-series/05.jpg", 
					nombre : "The Austere Academy", 
					precio: "$259",
					descripcion: "Cuando los tres huérfanos Baudelaire se acercan cautelosamente a su nuevo hogar Prufrock Preparatory School, no pueden dejar de notar el enorme arco de piedra que lleva el lema de la escuela Memento Mori o `Recuerda que morirás`. Este no es un saludo alegre y sin duda marca un comienzo poco propicio para una historia muy sombría tal como lo esperábamos de Lemony Snicket's A Series of Unfortunate Events, el delicioso y morboso conjunto de libros que comenzó con The Bad Beginning y que empeoró."
				},
				{	url: "/a-series-of-unfortunate-events/",
					cod: "9781405266123",  
					img: "images/a-series/06.jpg", 
					nombre : "The Ersatz Elevator", 
					precio: "$259",
					descripcion: "Violet, Klaus y Sunny Baudelaire son niños inteligentes. Son encantadores, e ingeniosos, y tienen facciones faciales agradables. Desafortunadamente, son excepcionalmente desafortunados. En The Ersatz Elevatort, los hermanos se enfrentan a una escalera oscura, a una red de arenques, a amigos en una situación desesperada, a tres iniciales misteriosas, a un mentiroso con un plan malvado, a un pasadizo secreto y a un refresco de perejil."
				},
				{	url: "/a-series-of-unfortunate-events/",
					cod: "9781405266109",  
					img: "images/a-series/07.jpg", 
					nombre : "The Vile Village", 
					precio: "$259",
					descripcion: "En The Vile Village los hermanos se enfrentan a asuntos tan desagradables como los cuervos migratorios, una mafia enojada, un titular de periódico, el arresto de personas inocentes, la celda Deluxe y algunos sombreros muy extraños."
				},
				{	url: "/a-series-of-unfortunate-events/",
					cod: "9781405266130",  
					img: "images/a-series/08.jpg", 
					nombre : "The Hostile Hospital", 
					precio: "$259",
					descripcion: "En The Hostile Hospital, los hermanos se enfrentan a un tendero sospechoso, cirugía innecesaria, globos en forma de corazón y algunas noticias sorprendentes sobre un incendio."
				},
				{	url: "/a-series-of-unfortunate-events/",
					cod: "9781405266147",  
					img: "images/a-series/09.jpg", 
					nombre : "The Ersatz Elevator", 
					precio: "$259",
					descripcion: "El Carnaval Carnívoro contiene una historia tan angustiosa que consumir cualquiera de sus contenidos sería mucho más estresante que incluso la comida más desequilibrada. Para no causar incomodidad, sería mejor si no mencionara alguno de los ingredientes de esta historia, particularmente un mapa confuso, una persona ambidiestra, una multitud rebelde, una tabla de madera y Chabo the Wolf Baby. Su tiempo podría estar mejor lleno de algo más apetecible, como comer sus vegetales o dárselos a otra persona."
				}];


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('list', { title: 'A Series of Unfortunate Events', libros: libros });
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
