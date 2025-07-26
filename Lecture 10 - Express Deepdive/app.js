// External Module
const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use((req, res, next) => {
  console.log("Came from first middleware", req.url, req.method)
  next();
})

app.use((req, res, next) => {
  console.log("Came from second middleware", req.url, req.method)
  next();
})

app.get("/", (req, res, next) => {
  console.log("Came from home page", req.url, req.method)
  res.send("<h1>Welcome to the site</h1>")
})

app.get("/contact-us", (req, res, next) => {
  console.log("Came from contact us page", req.url, req.method)
  res.send(`
    <form action="/contact-us" method="POST">
    <input type="text" name="name" placeholder="Enter name"/> 
    <input type="email" name="email" placeholder="Enter E-mail"/>
    <input type="submit" value="Submit">
    </form>
    `)
})

app.post("/contact-us", (req, res, next) => {
  console.log("Submitting form without req.body", req.url, req.method, req.body)
  next();
})

// Getting the bodyObject of the request data and adding the req.body to the request
app.use(bodyParser.urlencoded());

app.post("/contact-us", (req, res, next) => {
  console.log("Submitting form with req.body", req.url, req.method, req.body)
  res.send("<p>Form Submitted Successfully</p>")
})

const port = 3000;
app.listen(port, () => {
  console.log(`server running on port http://localhost:${port}`)
})
