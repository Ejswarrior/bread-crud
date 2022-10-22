const express = require('express')
const bread = require('../models/bread.js')
const breads = express.Router()

breads.get('/', (req, res) => {
    res.render('index',
    {
        breads: bread
    }

    )
    //res.send(breadObj)
})

breads.get('/:arrayIndex', (req, res) => {
    if(bread[req.params.arrayIndex]){
        res.render('Show',{
        bread: bread[req.params.arrayIndex]
    })
} else{
    res.send('404')
}
  })


module.exports = breads