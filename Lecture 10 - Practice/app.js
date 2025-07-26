// External Module
const express = require('express')

// Local Module
const homeRoute = require('./routes/home')
const contactRoute = require('./routes/contact-us')
const errorRoute = require('./routes/error')

const app = express()

app.use(homeRoute)
app.use(contactRoute)
app.use(errorRoute)

const port = 3000;
app.listen(port, () => {
  console.log(`server running on port http://localhost:${port}`)
})
