require('dotenv').config()
const express = require('express')
const app = express()


app.use(express.urlencoded({extended: true}))
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))


// 404 Page


const breadsController = require('./controllers/bread_controller.js')
app.use('/breads', breadsController)

app.get('*', (req, res) => {
    res.send('404')
  })
  
app.listen(process.env.PORT)