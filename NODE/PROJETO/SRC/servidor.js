const porta = 3003

const express = require('express')
const app = express()
const bancoDeDados = require('./bancoDeDados')

app.get('/produtos', (req, res, next) => {  // FUNÇÃO get UTILIZADO EM /produtos PARA RETORNAR A LISTA DE PRODUTOS!
    res.send(bancoDeDados.getProdutos())    // O MÉTODO send CONVERTE PARA JSON!
})
                    //--> OBS.: OS DOIS PONTOS (:id) INDICAM QUE id É UM PARÂMETRO!
app.get('/produtos/:id', (req, res, next) => {    // RETORNA UM PRODUTO ESPECÍFICO BASEADO NO id!
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.name,
        preco: req.body.preco
    })
    res.send(produto) // TRANSFORMA O produto EM UM JSON!
})

app.listen(porta, () => {
    console.log(`Servidor está executando na porta ${porta}.`)
})