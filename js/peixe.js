class Peixe{
    constructor(tipo, valor, peso){
        this.tipo = tipo;
        this.valor = valor;
        this.peso =  peso;
    }

    get tipo(){
        return this._tipo;
    }

    get valor(){
        return this._valor;
    }

    get peso(){
        return  this.valor;
    }

     total = (peso, kilo) => {return peso  * kilo}

    toString(){
        return `Peixe do Tipo: ${this.tipo} Valor: ${this.valor} Peso:${this.peso}`
    }
}
