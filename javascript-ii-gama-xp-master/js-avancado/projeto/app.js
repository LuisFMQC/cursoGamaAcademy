//pegar o input
// Se sim, mostrar categorias disponiveis, pergunta qual categoria escolhe
// Se não, mostra todos os livros em ordem crescente de páginas

const livros = require('./database')
const readline = require('readline-sync')

const entradaInicial = readline.question('Deseja buscar um livro? (S/N)')

if(entradaInicial.toLocaleUpperCase() === 'S'){
  console.log('Essas são as categorias disponíveis:')
  livros.map(livro => console.log(livro.categoria))

  const entradaCategoria = readline.question('Qual categoria voce escolhe?')

  const retorno = livros.filter(livro => livro.categoria === entradaCategoria)
  console.table(retorno)
} else {
  console.log('Essas são todas as categorias de livros:')
  const ordemPagina = livros.sort((a,b) => a.paginas - b.paginas)
  console.table(ordemPagina)
}
