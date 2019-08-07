require('dotenv').config()
const express = require('express')
const app = express()

const port = process.env.Port

const connection = require('knex')({
    client: 'mysql2',
    connection: {
        host: process.env.host,
        user: process.env.user,
        password: process.env.password,
        database: process.env.database
    }
})

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('home')
})

app.listen(port, (err) => {
    if (err)
        console.log('Não foi possível iniciar o servidor...')
    else
        console.log('DevShop running on ' + port)
})