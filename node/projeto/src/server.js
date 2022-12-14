const porta = 3003

const express = require('express')
const app = express()

app.get('/produtos', (req, res, next) => {
    res.send({nome: 'Notebook', preco: 123.45}) //convertendo pra JSON
})

app.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}.`)
})