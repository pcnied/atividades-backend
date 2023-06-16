class Bola {
    cor: string = 'Laranja'
    circunferencia: number
    material: string

    constructor(circunf: number, materiaL: string, cor?: string) {
        this.cor = cor ?? this.cor
        this.circunferencia = circunf
        this.material = materiaL
    }

    trocarCor(novaCor: string) {
        this.cor = novaCor
    }

    mostrarCor(cor: string) {
        cor = this.cor
    }
}



export default Bola;