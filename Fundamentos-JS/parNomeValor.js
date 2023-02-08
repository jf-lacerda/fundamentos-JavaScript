// par nome/valor
const saudacao = 'Opa' // contexto léxico

function exec() {
    const saudacao = 'Fala' // contexto léxico
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'João',
    idade: 26,
    peso: 90,
    endereco: {
        logradouro: 'Travessa Brusque',
        numero: 71
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)
console.log()