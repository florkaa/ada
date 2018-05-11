class Auto extends Vehiculo {
  //mi constructor
    constructor(name, dni, patente, marca, modelo, color, puertas) {
        super(name, dni, patente, marca, modelo, color);
        this._puertas = puertas;
    }

    set puertas(value) {  // poder modificar los datos
        this._puertas = value;
    }
    get puertas() {    // obtener los datos modificados
        return this._puertas;
    }

    // getPatente() {                 // método para recuperar patente
    //   return this._patente;
    // }
}