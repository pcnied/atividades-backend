abstract class Ingresso {
    valor: number

    constructor() {
        this.valor = 100
    }

    imprimirValor(): void {
        console.log(this.valor);
        
    }
}

class IngressoPadrão extends Ingresso {
     
}

class IngressoVIP extends Ingresso {

    imprimirValor(): void {
        console.log(this.valor + 100);
        
    }
    
}

class IngressoCamarote extends Ingresso {
    imprimirValor(): void {
        console.log(this.valor + 300);
        
    }

    imprimirDesconto(): void {
        super.imprimirValor()
    }
}

export { Ingresso, IngressoCamarote, IngressoPadrão, IngressoVIP };

