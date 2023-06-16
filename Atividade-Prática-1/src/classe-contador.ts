class Contador {
    numero: number = 0

    zerar(){this.numero = 0}
    incrementar(valor = 1){this.numero += valor}
    valorContador(){console.log(this.numero);
    }
}

export default Contador;

