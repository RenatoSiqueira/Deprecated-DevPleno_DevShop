const express = require('express')
const app = express()
const port = process.env.PORT || 3000

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