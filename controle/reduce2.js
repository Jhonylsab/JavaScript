const alunos = [
    {nome: 'Jose', nota: 7.9, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Joao', nota: 9.6, bolsista: false},
    {nome: 'Ana', nota: 8.6, bolsista: true}
]

const todosBolsista = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsista))

const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))