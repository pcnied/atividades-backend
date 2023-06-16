class Calculadora {
    historico: String[] = [];

    adicao(num1: number, num2: number) {
        const resultado = num1 + num2;

        this.adicionarHistorico(num1, num2, '+', resultado)
    }

    subtracao(num1: number, num2: number) {
        const resultado = num1 - num2;

        this.adicionarHistorico(num1, num2, '-', resultado)
    }

    multiplicacao(num1: number, num2: number) {
        const resultado = num1 * num2;

        this.adicionarHistorico(num1, num2, '*', resultado)
    }

    divisao(num1: number, num2: number) {
        const resultado = num1 / num2;

        this.adicionarHistorico(num1, num2, '/', resultado)
    }

    adicionarHistorico(num1: number, num2: number, operacao: string, resultado: number) {
        this.historico.push(`${num1} ${operacao} ${num2} = ${resultado}`);
    }

    mostrarHistorico(){
        console.log(this.historico);
        
    }

}

export default Calculadora;