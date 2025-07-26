// Core Modules
const path = require('path')

// External Modules 
const express = require('express')
// Router module
const userRouter = express.Router();

// Local Module
const rootDir = require('../utils/pathUtils');
const { registeredHomes } = require('./hostRouter');

userRouter.get("/", (req, res, next) => {
  console.log(registeredHomes);
  res.render('home', {registeredHomes: registeredHomes, pageTitle: 'airbnb Home'})
})

module.exports = userRouter
 