const filmes = [
    {
        id: 01,
        titulo: 'Dilema das Redes',
        descricao: 'Doc. sobre Tecnologia',
        duracao: 120
    },
    {
        id: 02,
        titulo: 'Matrix',
        descricao: 'Ficção científica',
        duracao: 115
    },
    {
        id: 03,
        titulo: 'A Cela',
        descricao: 'Suspense pesado',
        duracao: 140
    }
]

const {id, titulo, descricao, duracao} = filmes

filmes.map(filme => console.log(filme.descricao))