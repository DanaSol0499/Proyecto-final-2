class Egreso extends Dato{
    static contadorEngresos = 0;
    constructor(descripcion, valor){
        super(descripcion,valor);
        this._id = ++this.contadorEgresos;
    }

    get id(){
        return this._id;
    }
}