// Core Module
const path = require('path')

// External Module
const express = require('express')
const favouriteRouter = express.Router()

// Local Module
const rootDir = require('../utils/rootDir')

favouriteRouter.get("/favourite", (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'favourite.html'))
})

module.exports = favouriteRouter;