class Item {
    valor: number
    nome: string
    descricao: string

    constructor (valor: number, nome: string, descricao: string) {
        this.valor = valor
        this.nome = nome
        this.descricao = descricao
    }
}

class Pedido {
    itens: Item[] = []
    valorTotal: number = 0
}

const pedido = new Pedido()

const item1 = new Item(100, 'Cadeira', 'Móvel para sua sala')

pedido.itens.push(item1)
pedido.itens.push(item1)

pedido.valorTotal = pedido.itens.reduce((acc, item) => acc + item.valor, 0)

console.log(pedido);