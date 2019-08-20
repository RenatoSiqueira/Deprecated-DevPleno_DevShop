const init = db => {
    const home = require('../controllers/home')
    const auth = require('../controllers/auth')

    const admin = require('./admin')
    const categoriesRouter = require('./categories')
    const productsRouter = require('./products')

    const router = require('express').Router()

    router.get('/', home.getIndex)
    router.post('/login', auth.login(db))
    router.get('/sair', auth.logout)

    router.use('/admin', admin(db))
    router.use('/categoria', categoriesRouter(db))
    router.use('/produto', productsRouter(db))

    return router
}

module.exports = init