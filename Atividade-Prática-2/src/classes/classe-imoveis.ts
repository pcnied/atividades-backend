class Imovel {
    #endereco: string
    #preco: number = 1000000

    constructor(endereco: string) {
        this.#endereco = endereco
    }

    get endereco(): string {
        return this.#endereco
    }

    get preco(): number {
        return this.#preco
    }

    set preco(novoValor: number) {
        if(novoValor < 0) {
            console.log('Valor inválido.');
            
        } else {
            this.#preco = novoValor
        }

        
    }
}

class NovoImovel extends Imovel {
    constructor(endereco: string) {
        super(endereco)
        this.preco += 20000
    }
}

class VelhoImovel extends Imovel {
    constructor(endereco: string) {
        super(endereco)
        this.preco = this.preco - 20000
    }
}

export { Imovel, NovoImovel, VelhoImovel }
