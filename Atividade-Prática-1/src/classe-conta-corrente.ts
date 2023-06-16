class Conta {
    numeroDaConta: number
    nomeDoCorrentista: string
    saldo: number = 0

    constructor(numeroDaConta: number, nomeDoCorrentista: string, saldo: number) {
        this.numeroDaConta = numeroDaConta
        this.nomeDoCorrentista = nomeDoCorrentista
        this.saldo = saldo
    }

    alterarNome(novoNome: string) {
        this.nomeDoCorrentista = novoNome
    }

    deposito(novoDeposito: number) {
        this.saldo = novoDeposito
    }

    saque(novoSaque: number) {
        if (this.saldo >= novoSaque)
        this.saldo -= novoSaque
    }
}

export default Conta;