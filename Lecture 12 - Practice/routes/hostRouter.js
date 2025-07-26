// Core Modules
const path = require('path')

// External Modules
const express = require('express')
const hostRouter = express.Router();

// Local Module
const rootDir = require('../utils/pathUtils')

hostRouter.get("/add-home", (req, res, next) => {
  res.render('addHome', {pageTitle: 'Add Home', currentPage: 'addHome'})
})

const registeredHomes = [];

hostRouter.post("/add-home", (req, res, next) => {
  console.log("Home Registration Successful for: ", req.body)
  registeredHomes.push(req.body)
  res.render('homeAdded', {pageTitle: 'Home Added Successfully', currentPage: 'homeAdded'})
})

exports.hostRouter = hostRouter;
exports.registeredHomes = registeredHomes;
