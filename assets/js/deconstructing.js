let person = {
    nome: 'Cicrano',
    sobrenome: 'Da Silva',
    idade: 20,
    social: {
        facebook: 'b7web',
        instagram: '@teste'
    },
    nomeCompleto: function() {
        return `${this.nome} ${this.sobrenome}`;
    }
};

//Desconstruindo um objeto
let { nome, sobrenome, idade } = person;

console.log(nome, sobrenome, idade);