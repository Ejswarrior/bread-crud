require('dotenv').config()
const express = require('express')
const app = express()

app.get('/', (req, res) => {

    res.send('Something')

})

const breadsController = require('./controllers/bread_controller.js')
app.use('/breads', breadsController)


app.listen(process.env.PORT)