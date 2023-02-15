function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0
//precida de uma expressão que retorna verdadeira ou falsa, enquanto for verdadeira continue executando o laço até satisfazer a condição
do {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}`)
} while (opcao != -1)

console.log('Atá a próxima') 