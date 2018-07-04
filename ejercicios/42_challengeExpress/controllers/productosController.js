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

var categorias = ['Funko Pop', 'Dorbz', 'Pop! Keychain']

self.index = function(req, res, next) {
	res.render('productos', { title: 'Toys and stuff', productos: productos, categorias: categorias });
}

self.codigo = function(req, res, next){
	if(isNaN(req.params.codigo)){
		res.send('error')
	}else{
	  let prod = search(req.params.codigo)
	  console.log(prod)
	  res.render('item', { prod: prod });
  	}
}

self.categoria = function(req, res, next){
	const productosFiltered = productos.filter(prod => prod.cod !== req.params.categoria);
  	res.render('productos', { title: 'images/logos/hp-logo.png', productos: productosFiltered });
}

function search(codigo){
	for(var i=0; i<productos.length; i++){
		if(codigo == productos[i].cod){
			return productos[i];
		}
	}
	return null;
}

module.exports = self;