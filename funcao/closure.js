// Closure é o escopo criadi quando usa função declarada
// Esse escopo permite a função acessar e manipular váriaveis externas à função

const x = 'Global'

function fora() {
    const x = 'Local'
    function dentro() {
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())