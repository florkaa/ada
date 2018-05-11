class Profesor extends Persona{
	constructor(name, lastName, fechaNac, dni, sueldo){
		super(name, lastName, fechaNac, dni);
		this._sueldo = sueldo;
	}

	set sueldo(value){
		this._sueldo = value;
	}
	get sueldo(){
		return this._sueldo;
	}

}
 /*
}
materia = {
	nombre: ,
	notas: [],
	horarios: ,
	promedio:
}
*/