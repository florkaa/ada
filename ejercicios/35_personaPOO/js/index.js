$('#submit').on('click', e=>{
	e.preventDefault();
	var name = $('#name').val();
	var lastName = $('#lastName').val();
	var bday = $('#bday').val();
	var dni = $('#dni').val(); 
	var legajo = $('#legajo').val();

	let alumno = new Alumno(name, lastName, bday, dni, legajo);

	let materia = new Materia('física', 'lun y mié 19:00 a 22:00');
	materia.addNota(9);
	materia.addNota(5);

	let materia2 = new Materia('química', 'mar y vie 18:00 a 21:00');
	materia2.addNota(7);
	materia2.addNota(8);

	alumno.addMateria(materia);
	alumno.addMateria(materia2);

	let promedioMateria = materia.calcularPromedio();
	let promedioMateria2 = materia2.calcularPromedio();

	let promAlumno = alumno.calcularPromedioGral();

	console.log(alumno)
	console.log(materia, materia2);
	console.log('promedio física:', promedioMateria, 'promedio química', promedioMateria2);
	console.log(promAlumno)
});