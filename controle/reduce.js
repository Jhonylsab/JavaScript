const alunos = [
    {nome: 'Jose', nota: 7.9, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Joao', nota: 9.6, bolsista: false},
    {nome: 'Ana', nota: 8.6, bolsista: true}
]

console.log(alunos.map(a => a.nota))
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
})

console.log(resultado)