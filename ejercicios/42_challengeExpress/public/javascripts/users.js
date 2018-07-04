var jsonUsers;
var users = [];
var userList = localStorage.getItem('users');
console.log(userList)

$('#enviarRegistro').on('click', e=>{
	e.preventDefault();
	let user = {
	    user: $('#user').val(),
	    email: $('#email').val(),
	    password: $('#password').val(),
	    password2: $('#password2').val(),
	};
	if(user.password != user.password2){
		$('.errorContra').show();
	}else{
		users.push(user);
	 
		jsonUsers = {
		    'users': users,
		    'total': users.length,
		}

		let string = JSON.stringify(jsonUsers);
		localStorage.setItem('users', string);  
	}
});

$('#login').on('click', e=>{
	e.preventDefault();
	let users = JSON.parse(userList).users;
	var userLog = $('#userLogin').val();
	var passLog = $('#passLogin').val();

	if(users[0].user == userLog && users[0].password == passLog){
		alert ('logueado')
	}else{
		alert('try again')
	}
})