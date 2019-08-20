const init = db => {
    const productModel = require('../models/product')(db)

    const getProduct = async (req, res) => {
        const prod = await productModel.getProductById(req.params.id)
        res.render('product-detail', { product: prod })
    }
    return {
        getProduct
    }
}

module.exports = init