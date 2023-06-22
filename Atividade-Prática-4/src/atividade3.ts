class Pessoa {
    nome: string;
    idade: number;

    constructor(nome: string, idade: number) {
        this.nome = nome
        this.idade = idade
    }


}

const pessoa1 = new Pessoa('Zezinho', 26)
const pessoa2 = new Pessoa('Maria', 21)
const pessoa3 = new Pessoa('Roberto', 29)
const pessoa4 = new Pessoa('Cleiton', 18)
const pessoa5 = new Pessoa('Homer', 22)
const pessoa6 = new Pessoa('Pedro', 25)
const pessoa7 = new Pessoa('Norman', 32)

// const pessoas = [pessoa1, pessoa2, pessoa3, pessoa4, pessoa5, pessoa6, pessoa7].filter((pessoa) => pessoa.idade < 23)

// const pessoas = [pessoa1, pessoa2, pessoa3, pessoa4, pessoa5, pessoa6, pessoa7].filter((pessoa) => pessoa.idade < 30)

const pessoas = [pessoa1, pessoa2, pessoa3, pessoa4, pessoa5, pessoa6, pessoa7].reduce(function(acumulador, valorTotal) {
    return acumulador + valorTotal
}, 0)

console.log(pessoas);

