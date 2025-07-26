// Core Module
const path = require('path')

// External Module
const express = require('express')
const contactRouter = express.Router()
const bodyParser = require('body-parser')

// Local Module
const rootDir = require('../utils/rootPath')

contactRouter.get("/contact-us", (req, res, next) => {
  console.log("Welcome to Contact Us Page")
  res.sendFile(path.join(rootDir, 'views', 'contact-us-form.html'))
})

contactRouter.use(bodyParser.urlencoded())

contactRouter.post("/contact-us", (req, res, next) => {
  console.log("Welcome to contact us page with your data")
  console.log(req.body)
  res.sendFile(path.join(rootDir, 'views', 'contact-us-thanks.html'))
})

module.exports = contactRouter;