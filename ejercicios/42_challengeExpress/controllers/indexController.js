const self = {}

var productos = [{	url: "/productos/",
					cod: "4415",  
					img: "images/4415_WillGraham-Mask.jpg", 
					nombre : "Will Graham", 
					precio: "$450",
					tag: 'Funko Pop'
				},
				{	url: "/productos/",
					cod: "4465",  
					img: "images/4465_Hannibal_-_Wendigo.jpg", 
					nombre : "Hannibal - Wendigo", 
					precio: "$550", 
					tag: 'Funko Pop'
				},
				{	url: "/productos/",
					cod: "30499",  
					img: "images/30499_Hellboy_Hellboy_Horns_Dorbz_GLAM.png", 
					nombre : "Hell Boy", 
					precio: "$300",
					tag: 'Dorbz'
				},
				{	url: "/productos/",
					cod: "31813",  
					img: "images/31813_Daenerys_GOT_KC_GLAM.png", 
					nombre : "Daenerys", 
					precio: "$250",
					tag: 'Pop! Keychain'
				},
				{	url: "/productos/",
					cod: "31812",  
					img: "images/31812_JonSnow_GOT_KC_GLAM.png", 
					nombre : "Jon Snow", 
					precio: "$250",
					tag: 'Pop! Keychain'
				}];

self.index = function(req, res, next) {	
  	let ranProductos = random(productos, 3);
  	console.log(ranProductos)
  	res.render('index', { title: 'Toys and stuff', ranProductos: ranProductos });
}

function random(array, elements){
    var result = [];
    for (var i = 0; i < elements; i++) {
        result.push(array[Math.floor(Math.random()*array.length)]);
    }
    return result;
}

module.exports = self;