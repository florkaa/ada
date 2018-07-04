$('.ingresoUsuario').hide()
$('#usuarioExistente').on('click', e=>{
	e.preventDefault();
	$('.registroUsuario').hide()
	$('.ingresoUsuario').show()
})

// $(".producto").click(function() {
//   window.location = $(this).find("a").attr("href"); 
//   return false;
// });
