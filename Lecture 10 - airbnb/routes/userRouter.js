// Core Modules
const path = require('path')

// External Modules 
const express = require('express')
// Router module
const userRouter = express.Router();

// Local Module
const rootDir = require('../utils/pathUtils')

userRouter.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'home.html'))
})

module.exports = userRouter
