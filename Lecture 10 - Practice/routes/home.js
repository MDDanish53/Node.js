// Core Module
const path = require('path')

// External Module
const express = require('express')
const homeRouter = express.Router();

//Local Module
const rootDir = require('../utils/rootPath')

homeRouter.get("/", (req, res, next) => {
  console.log("Welcome to Home")
  res.sendFile(path.join(rootDir, 'views', 'home.html'))
})

module.exports = homeRouter;