class Auto {
  //mi constructor
    constructor(name="", dni="", patente = "") {
        this._name = name;
        this._dni = dni;
        this._patente = patente;
    }

    set name(value) {
        this.name = value;
    }
    get name() {
        return this.name;
    }

    set dni(value) {
        this.dni = value;
    }
    get dni() {
        return this.dni;
    }

    set patente(value) {
        this._patente = value;
    }
    get patente() {
        return this._patente;
    }
  // getPatente() {
  //   return this._patente;
  // }
}