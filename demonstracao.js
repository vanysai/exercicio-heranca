class Animal {
    constructor (nome, raca){
        this.nome = nome
        this.raca = raca
    }
    Correr(){
        console.log();
    }
}

class Cachorro extends Animal {
    constructor (nome, cor, idade){
        super (nome, raca),
        this.cor = cor,
        this.idade = idade
    }
}

let a = new Animal('Jao')
let dog = new Cachorro ('Pluto', 'Preto')
dog.Correr()