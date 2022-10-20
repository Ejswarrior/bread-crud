const express = require('express')
const bread = require('../models/bread.js')
const breads = express.Router()
const breadObj = require('../models/bread.js')
breads.get('/', (req, res) => {
    res.render('index',
    {
        breads: bread
    }

    )
    //res.send(breadObj)
})

breads.get('/:arrayIndex', (req, res) => {
    res.send(breadObj[req.params.arrayIndex])
  })


module.exports = breads