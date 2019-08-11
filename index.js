require('dotenv').config()
const express = require('express')
const app = express()

const port = process.env.Port
const categoryModel = require('./models/category')
const productModel = require('./models/product')

const db = require('knex')({
    client: 'mysql2',
    connection: {
        host: process.env.host,
        user: process.env.user,
        password: process.env.password,
        database: process.env.database
    }
})

/*
db.on('query', query => {
    console.log('SQL: ', query.sql)
})
*/

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(async (req, res, next) => {
    const categories = await categoryModel.getCategories(db)()
    res.locals = { categories }
    next()
})

app.get('/', async (req, res) => {
    res.render('home')
})

app.get('/categoria/:id/:slug', async (req, res) => {
    const products = await productModel.getProductsByCategoryId(db)(req.params.id)
    const category = await categoryModel.getCategoryById(db)(req.params.id)
    res.render('category', { products, category })
})

app.get('/produto/:id/:slug', async (req, res) => {
    const prod = await product.getProductById(db)(req.params.id)
    res.render('product-detail', { product: prod })
})

app.listen(port, (err) => {
    if (err)
        console.log('Não foi possível iniciar o servidor...')
    else
        console.log('DevShop running on ' + port)
})