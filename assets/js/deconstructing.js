let person = {
    nome: 'Cicrano',
    idade: 20,
    social: {
        facebook: 'b7web',
        instagram: {
            url: '@teste',
            seguidores: 2000,
        },
    }
};

function pegarNome({nome, sobrenome = 'Da Silva', social:{instagram:{url:instagram}}}) {
    return `${nome} ${sobrenome} siga em ${instagram}`;
}

console.log(pegarNome(person));