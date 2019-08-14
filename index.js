require('dotenv').config()

const db = require('knex')({
    client: 'mysql2',
    connection: {
        host: process.env.host,
        user: process.env.user,
        password: process.env.password,
        database: process.env.database
    }
})

db.on('query', query => {
    console.log('SQL: ', query.sql)
})

const app = require('./app')(db)
const port = process.env.Port

const user = require('./models/user')
user.initalUser(db)()

app.listen(port, (err) => {
    if (err)
        console.log('Não foi possível iniciar o servidor...')
    else
        console.log('DevShop running on ' + port)
})