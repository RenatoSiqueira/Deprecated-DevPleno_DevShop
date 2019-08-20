const init = db => {

    const categoriesRouter = require('./categories')
    // const productsRouter = require('./products')

    const router = require('express').Router()

    router.use((req, res, next) => {
        if (req.session.user) {
            if (req.session.user.roles.indexOf('admin') < 0) {
                res.redirect('/')
            } else {
                next()
            }
        } else {
            res.redirect('/login')
        }
    })

    router.get('/', categoriesRouter(db))
    router.use('/categorias', categoriesRouter(db))
    //router.use('/produto', productsRouter(db))

    return router
}

module.exports = init