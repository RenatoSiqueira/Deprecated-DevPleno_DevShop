const slug = require('../utils/slug')

const getCategories = db => async () => {
    const categories = await db('categories').select('*')
    const categoriesWithSlug = categories.map(category => {
        const newCategory = { ...category, slug: slug(category.category) }
        return newCategory
    })
    return categoriesWithSlug
}

const getCategoryById = db => async (id) => await db('categories').select('*').where('id', id)

module.exports = {
    getCategories,
    getCategoryById
}