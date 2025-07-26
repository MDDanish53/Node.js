// External Modules 
const express = require('express')
// Router module
const userRouter = express.Router();

// Local Module
const homesController = require('../controllers/homes')

userRouter.get("/", homesController.getHomes)

module.exports = userRouter