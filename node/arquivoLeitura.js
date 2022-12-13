const fs = require('fs')

const produto = {
    nome: 'Celular',
    preco: 1249.99,
    desconto: 0.15
}

fs.writeFile(__dirname + '/aquivoGerdado.json', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo salvo!')// aqui ele irá receber uma callback de erro, caso ela seja falso ira dar uma mensagem de "Arquivo salvo1!".
})//aqui ele irá criar uma nova pasta usando o "writeFile".
