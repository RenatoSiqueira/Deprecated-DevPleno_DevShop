const categoryModel = require('../models/category')
const productModel = require('../models/product')

const getCategories = db => async (req, res) => {
    const products = await productModel.getProductsByCategoryId(db)(req.params.id)
    const category = await categoryModel.getCategoryById(db)(req.params.id)
    res.render('category', { products, category })
}

module.exports = {
    getCategories
}