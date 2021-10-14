const pessoa = {
    nome: 'Luis Fernando',
    idade: 28,
    cidade: 'Brasília'
}

//Notação de ponto

console.log(pessoa.nome) //Luis Fernando

//Notação de colchetes

console.log(pessoa['idade']) //28

//Como desestruturar objetos

const {nome, idade, cidade} = pessoa

console.log(`Nome: ${nome} - Idade: ${idade} - Cidade: ${cidade}`)