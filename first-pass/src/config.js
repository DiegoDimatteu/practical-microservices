function createConfig ({ env }) {
    return {
    env,
    }
}



const createKnexClient = require('./knex-client')
const createHomeApp = require('./app/home')
function createConfig ({ env }) {
    const db = createKnexClient({
        connectionString: env.databaseUrl
    })
    const homeApp = createHomeApp({ db })
    return {
        db,
        homeApp,
    }
}


const createRecordViewingsApp = require('./app/record-viewings')
function createConfig ({ env }) {
    const recordViewingsApp = createRecordViewingsApp({ db })
    return {
        recordViewingsApp
    }
}
