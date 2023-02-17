// ForIn pode ser em um objeto ou em um array

const notas = [6.7, 5.9, 4.6, 4.9, 7.7]

//Para cada um dos elementos da nota ele vai devolver o índice i
for( let i in notas) {
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'João',
    Sobrenome: 'Lacerda',
    Peso: 90,
    Idade: 26
}

for(let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}