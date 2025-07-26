// Core Module
const path = require('path')

// External Module
const express = require('express')
const productRouter = express.Router()

// Local Module
const rootDir = require('../utils/rootDir')

productRouter.get("/products", (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'products.html'))
})

module.exports = productRouter;