function tratarErroELancar(erro) {
    //throw new Error('...')
    throw ('Ops, deu erro')
}

function imprimirNomeGritado(obj) {
   try {
        console.log(obj.name.toUppercase())
   } catch (e) {
        tratarErroELancar(e)
   } finally {
        console.log('final')
   }
}

const obj = { nome: 'Roberto' }
imprimirNomeGritado(obj)