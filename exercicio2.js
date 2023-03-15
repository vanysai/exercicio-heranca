class Animal {
    constructor (nome, comprimento, patas, cor, ambiente, velocidade){
    this.nome = nome,
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
    console.log(`Nome: ${this.nome} \n Comprimento: ${this.comprimento}, \n Patas: ${this.patas}, \n Cor: ${this.cor}, \n Ambiente: ${this.ambiente}, \n Velocidade ${this.velocidade}`)
}
}

class Peixe extends Animal{
    constructor (nome, comprimento, patas, cor, ambiente, velocidade, caracteristica){
        super(nome, comprimento, patas, cor, ambiente, velocidade, caracteristica),
        this.caracteristica = caracteristica
    }
    
}

class Mamiferos extends Animal{
    constructor (nome, comprimento, patas, cor, ambiente, velocidade, alimento){
        super(nome, comprimento, patas, cor, ambiente, velocidade, alimento),
        this.alimento = alimento
    }
}

let tilapia = new Peixe ('Max', 'None', '0 patas', 'Cinza', 'Mar', 'None', 'Tem barbatanas')
console.table(tilapia)

let camelo = new Mamiferos ('Camelo', '150cm', '4', 'Amarelo', 'Terra', '2.0 m/s')
console.table(camelo)

let tubarao = new Peixe ('Tubarão', '300cm', '0', 'Cinzento', 'Mar', '1.5 m/s', 'Barbatanas')
console.table(tubarao)

let canadaurso = new Mamiferos ('Urso-do-canadá', '180cm', '4', 'Vermelho', 'Terra', '0.5 m/s', 'Mel')
console.table(canadaurso)

let urso  = new Mamiferos ('Maxine', '30 cm', '4 patas', 'Marrom', 'None','None', 'Mel' )
console.table(urso)