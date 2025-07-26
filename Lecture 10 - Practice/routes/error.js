// Core Module
const path = require('path')

// External Module
const express = require('express')
const errRoute = express.Router()

// Local Module
const rootDir = require('../utils/rootPath')

errRoute.use((req, res, next) => {
  console.log("Welcome to Error Page")
  res.sendFile(path.join(rootDir, 'views', 'error.html'))
})

module.exports = errRoute;