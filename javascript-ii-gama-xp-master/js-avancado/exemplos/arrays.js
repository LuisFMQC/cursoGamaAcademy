const alunosKonsist = ["Dede","Ratao","LucasTon","Zé Maconha"]

//Acessar informações num array
console.log(alunosKonsist[3]) //Zé Maconha

//Operador spread (...)
const alunosDev = [...alunosKonsist,"Carlós"]

console.log(alunosDev)

//Métodos de iteração

for (let i = 0; i < alunosDev.length; i++){
    console.log(alunosDev[i])
}

//Métodos de iteração de array
//1- Map: retorna um novo array sem alterar o array original,
// criando uma cópia com as alterações que desejamos.
const alunos = ["Dede","Ratao","LucasTon","Zé Maconha"]

alunos.map(aluna => console.log(aluna))

//2- Filter: retorna um novo array com os elementoss filtrados

const numeros = [34, 35, 67, 90, 10, 02]

const numerosImpares = numeros.filter(num => num%2 != 0)
console.log(numerosImpares)

const numerosPares = numeros.filter(num => num%2 == 0)
console.log(numerosPares)

//3- Find - encontra e retorna o primeiro elemento
// que achar igual ao elemento passado por parâmemtro.
const produtos = ["Computador","Moto","Iphone","Headset"]

const encontraComputador = produtos.find(produto => produto === "Computador")
console.log(encontraComputador)

const encontraIphone = produtos.find(produto => produto === "Iphone")
console.log(encontraIphone)

//4- sort - ordena o array
const num = [28, 45, 90, 100, 26]

const ordemCrescente = num.sort((a,b) => a-b)
console.log(ordemCrescente)

const ordemDecrescente = num.sort((a,b) => b-a)
console.log(ordemDecrescente)

//5- Reduce - reduz nosso array a um resultado de uma operação matemática
const numbers = [1, 34, 35]

const soma = numbers.reduce((valorAtual, valorAnterior) => {
    return valorAnterior + valorAtual
})

console.log(soma)