// External Module
const express = require('express')

// Creating app from express by executing express function 
const app = express();

// first middleware
app.get("/",  (req, res, next) => {
  console.log("Came in First Middleware", req.url, req.method)
  next();
})

// second middleware
app.post("/submit-details", (req, res, next) => {
  console.log("Came is Second Middleware", req.url, req.method)
  res.send("<p>Welcome to my website<p>")
})

// another middleware
app.use("/", (req, res, next) => {
  console.log("Came in another middleware", req.url, req.method)
  res.send("Came from another middleware")
})

const port = 3000;
app.listen(port, () => {
  console.log(`server running on port http://localhost:${port}`)
})
