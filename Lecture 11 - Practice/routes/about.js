// Core Module
const path = require('path')

// External Modules
const express = require('express')
const aboutRouter = express.Router();

// Local Module
const rootDir = require('../utils/rootDir')

aboutRouter.get("/about", (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'about.html'))
})

aboutRouter.use(express.urlencoded());

aboutRouter.post("/about", (req, res, next) => {
  console.log(req.body)
  res.sendFile(path.join(rootDir, 'views', 'thankyou.html'))
})

module.exports = aboutRouter;