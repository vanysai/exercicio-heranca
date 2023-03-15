class Animal {
    constructor (animal, comprimento, patas, cor, ambiente, velocidade){
    this.animal = animal,
    this.comprimento = comprimento,
    this.patas = patas,
    this.cor = cor,
    this.ambiente = ambiente,
    this.velocidade = velocidade
    }




alterarNome(nome){
    this.nome = nome
}
alterarComprimento(comprimento){
    this.comprimento = comprimento
}
alterarPatas(patas){
    this.patas = patas
}

alterarCor(cor){
    this.cor = cor
}
alterarAmbiente(ambiente){
    this.ambiente = ambiente
}
alterarVelocidade(velocidade){
    this.velocidade = velocidade
}
Dados(){
    console.log(Dados)
}
}

class Camelo extends Animal{
    constructor (animal, comprimento, patas, cor, ambiente, velocidade, caracteristica){
        super(animal, comprimento, patas, cor, ambiente, velocidade, caracteristica)

    }
    
}

class Tubarao extends Animal{
    constructor(animal, comprimento, patas, cor, ambiente, velocidade, caracteristica) {
        super(animal, comprimento, patas, cor, ambiente, velocidade, caracteristica)
        this.caracteristica = caracteristica
    }
}

class Urso extends Animal{
    constructor (nome, comprimento, patas, cor, ambiente, velocidade, alimento){
        super(nome, comprimento, patas, cor, ambiente, velocidade, alimento),
        this.alimento = alimento
    }
}

let camelo = new Camelo ('Camelo', '150 cm', '4 patas', 'Amarelo', 'Terra', '2.0 m/s', 'None')
console.log(camelo)

let tubarao = new Tubarao ('Tubarão', '300cm', '0 patas', 'Cinzento', 'Mar', '1.5 m/s', 'Barbatanas')
console.log(tubarao)

let urso  = new Urso ('Urso-do-canadá', '180 cm', '4 patas', 'Vermelho', 'Terra','0.5 m/s', 'Mel' )
console.log(urso)