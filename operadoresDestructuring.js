// novo recurso do ES 2015

const pessoa = {
    nome: 'João',
    idade: 26,
    endereco: {
        logradouro: 'abc',
        numero: 1000
    }
}

const {nome, idade} = pessoa

console.log(nome, idade)

const { nome: n, idade: i} = pessoa

console.log(n,i)

const { sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada)

const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, nome, cep)