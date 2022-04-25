const express = require ('express')
const app = express()
const bodyParser = require ('body-parser')

app.use(bodyParser.json())

const sitesAcessados = []

app.post('/api/sites', (requisicao, resposta) => {
    if (!requisicao.body.url || !requisicao.body.dataDeAcesso) {
        resposta.status(400)
        resposta.send(
            JSON.stringify({
                mensagem:  'Os campos "url" e "dataDeAcesso" são obrigatórios e não podem estar vazios!'
            }))
            resposta.end()
            return
    }

    const site = {
        url: requisicao.body.url,
        dataDeAcesso: requisicao.body.dataDeAcesso
    }

    sitesAcessados.push(site)
    resposta.status(201)
    resposta.send(
        JSON.stringify(site)
    )
})

app.listen(3000, () => console.log('A API está funcionando!'))