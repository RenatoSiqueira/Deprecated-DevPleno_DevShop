const init = db => {
    const express = require('express')
    const app = express()

    const categoryModel = require('./controllers/categories')

    const routes = require('./routes')

    app.set('view engine', 'ejs')
    app.use(express.static('public'))
    app.use(async (req, res, next) => {
        const categories = await categoryModel.getCategories(db)()
        res.locals = { categories }
        next()
    })

    app.use(routes(db))

    return app
}

module.exports = init