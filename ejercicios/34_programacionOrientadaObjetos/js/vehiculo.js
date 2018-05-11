class Vehiculo{
      //mi constructor
    constructor(name, dni, patente, marca, modelo, color, velocidad) {
        this._name = name;
        this._dni = dni;
        this._patente = patente;
        this._marca = marca;
        this._modelo = modelo;
        this._color = color;
    }

    set name(value) {  // poder modificar los datos
        this._name = value;
    }
    get name() {    // obtener los datos modificados
        return this._name;
    }

    set dni(value) {
        this._dni = value;
    }
    get dni() {
        return this._dni;
    }

    set patente(value) {
        this._patente = value;
    }
    get patente() {
        return this._patente;
    }

    set marca(value) {
        this._marca = value;
    }
    get marca() {
        return this._marca;
    }

    set modelo(value) {
        this._modelo = value;
    }
    get modelo() {
        return this._modelo;
    }

    set color(value) {
        this._color = value;
    }
    get color() {
        return this._color;
    }

    acelerar(aceleracion){
        this._velocidad+=aceleracion;
    }

    frenar(){
        this._velocidad = 0;
    }

    doblar(){

    }

}