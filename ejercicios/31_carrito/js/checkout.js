class Checkout{
	constructor(subtotal, cuotas, descuento, recargo, envio){
		this._subtotal = subtotal;
		this._cuotas = cuotas;
		this._descuento = descuento;
		this._recargo = recargo;
		this._envio = envio;
	}

	set subtotal(value){
		this._subtotal = value;
	}
	get subtotal(){
		return this._subtotal;
	}

	calcularDescuento(codigo){
		if(codigo=="desc10"){
			this._descuento = this._subtotal * 0.1;
		}else if(codigo=="desc25"){
			this._descuento = this._subtotal*0.25;
		}else if(!codigo=="desc10" && !codigo=="desc25" || codigo==""){
			this._descuento = 0;
		}
		return this._descuento;
	}

	calcularFinanciacion(subtotal, cuotas) {
		switch(cuotas){
			case 1: this._recargo = 0; break;
			case 3: this._recargo = subtotal*10/100; break;
			case 6: this._recargo = subtotal*15/100; break;
		}
		return this._recargo;
	}

	calcularTotal(){
		this._total = this._subtotal - this._descuento + this._recargo;
		console.log(this._recargo, this._descuento)
		return this._total;
	}
}