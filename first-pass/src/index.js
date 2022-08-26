//Funções para construir aplicativo Express e config, bem como puxar no ambiente
const createExpressApp = require('./app/express')
const createConfig = require('./config')
const env = require('./env')


//Instância da configuração e do aplicativo Express.
const config = createConfig({ env })
const app = createExpressApp({ config, env })


// Inicia o sistema
function start () {
    app.listen(env.port, signalAppStart)
}
//Servidor HTTP está escutando e registra algumas das configurações do ambiente
function signalAppStart () {
    console.log(`${env.appName} started`)
    console.table([['Port', env.port], ['Environment', env.env]])
}
module.exports = {
    app,
    config,
    start
}
    