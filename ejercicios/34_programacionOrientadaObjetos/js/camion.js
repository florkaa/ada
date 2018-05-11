class Camion extends Vehiculo {
    constructor(name, dni, patente, marca, modelo, color, ejes, tara){
        super(name, dni, patente, marca, modelo, color);
        this._ejes = ejes;
        this._tara = tara;
    }

    set ejes(value) {
        this._ejes = value;
    }
    get ejes() {
        return this._ejes;
    }

    set tara(value) {
        this._tara = value;
    }
    get tara() {
        return this._tara;
    }

    acoplar(){

    }
}