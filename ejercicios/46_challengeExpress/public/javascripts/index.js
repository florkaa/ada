$('#send').on('click', e=>{
	e.preventDefault();

	var nombre = $('#name').val();
	var apellido = $('#lastName').val();
	var telefono = $('#phone').val();
	var email = $('#email').val();
	console.log(nombre, apellido, telefono, email)
	
	if(!nombre || !apellido || !telefono || !email){
		$('.none').show();
	}else{
		$.ajax({
		      url: "https://localhost:3030/user/form",
		      type: "post",
		      data: {
		        nombre: nombre,
		        apellido: apellido,
		        telefono: telefono,
		        email: email
		      }
		});
	}
})
//list search
$(document).ready(function(){
  $("#search").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#userList li").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});