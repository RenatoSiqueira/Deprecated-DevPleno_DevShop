const init = db => {
    const home = require('../controllers/home')

    const categoriesRouter = require('./categories')
    const productsRouter = require('./products')

    const router = require('express').Router()

    router.get('/', home.getIndex)
    router.use('/categoria', categoriesRouter(db))
    router.use('/produto', productsRouter(db))

    return router
}

module.exports = init