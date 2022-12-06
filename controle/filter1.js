const produto = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPade Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 18.99, fragil: true},
    {nome: 'Copo de Plastico', preco: 13.99, fragil: false}
]

const caro = produto => produto.preco >=500
const fragil = produto => produto.fragil

console.log(produto.filter(caro).filter(fragil))