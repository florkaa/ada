class Persona{
	constructor(name, lastName, fechaNac, dni){
		this._name = name;
		this._lastName = lastName;
		this._fechaNac = fechaNac;
		this._dni = dni;
	}

	set name(value){
		this._name = value;
	}
	get name(){
		return this._name;
	}

	set lastName(value){
		this._lastName = value;
	}
	get lastName(){
		return this._lastName;
	}

	set fechaNac(value){
		this._fechaNac = value;
	}
	getEdad(){
		let hoy = "2018-05-11"
		return hoy - this._fechaNac;
	}
}

