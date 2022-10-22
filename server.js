require('dotenv').config()
const express = require('express')
const app = express()

app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))



app.get('/', (req, res) => {

    res.send('Something')

})

const breadsController = require('./controllers/bread_controller.js')
app.use('/breads', breadsController)


app.listen(process.env.PORT)