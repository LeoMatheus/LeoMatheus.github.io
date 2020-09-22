var $ = function (id) {
    return document.getElementById(id);
}


$('peso').onkeypress = function(event){
    var  code = event.charCode;

    if(!(code >= 46 && code <= 57) || code ==  47){
        event.preventDefault();
    }
}



var total = (peso, kilo) => {return peso  * kilo}

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


function adicionarItem(peso, valor, tipo){
    peixes.push({peso = this.peso, valor = this.valor, tipo = this.tipo})
}