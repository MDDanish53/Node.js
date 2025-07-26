// Core Module
const path = require('path')

// External Module
const express = require('express')

// Local Module
const rootDir = require('./utils/rootDir')
const homeRoute = require('./routes/home');
const productRouter = require('./routes/products');
const favouriteRouter = require('./routes/favourite');
const aboutRouter = require('./routes/about');

const app = express();

app.use(homeRoute)
app.use(productRouter)
app.use(favouriteRouter)
app.use(aboutRouter)

app.use(express.static(path.join(rootDir, 'public')))

const port = 3000;
app.listen(port, () => {
  console.log(`server running on port http://localhost:${port}`)
})