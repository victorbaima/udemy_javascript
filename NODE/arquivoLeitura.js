const fs = require('fs')

const caminho = __dirname + '/arquivo.json'     // __dirname: CONSTANTE QUE ESTÁ PRESENTE EM TODOS OS MÓDULOS DO NODE QUE REPRESENTA O DIRETÓRIO ATUAL!

// LEITURA SÍNCRONA:                   * LÊ O ARQUIVO TODO E SÓ DEPOIS LIBERA O EVENT LOOP (OPÇÃO NÃO RECOMENDADA!)
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// LEITURA ASSÍNCRONA:
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}: ${config.db.port}`)
})

// OUTRA OPÇÃO DE LEITURA:      * LÊ O ARQUIVO JSON E JÁ CONVERTE PARA OBJETO!
const config = require('./arquivo.json')
console.log(config.db)

// MAIS UMA...          * RETORNA UM ARRAY COM TODOS OS ARQUIVOS DO DIRETÓRIO!
fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteúdo da pasta...')
    console.log(arquivos)
})