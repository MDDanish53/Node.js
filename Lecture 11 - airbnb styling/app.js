// Core Modules
const path = require('path')

// External Modules 
const express = require('express')

// Local Module (Route)
const userRouter = require('./routes/userRouter')
const hostRouter = require('./routes/hostRouter')
const rootDir = require('./utils/pathUtils')

const app = express()

//this will log req.url and req.method for all requests
app.use((req, res, next) => {
  console.log(req.url, req.method)
  next();
})


app.use(express.urlencoded());
app.use(userRouter)
app.use("/host", hostRouter)

// to make the public folder accessible
app.use(express.static(path.join(rootDir, 'public')))

// Error message for not handled paths
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, 'views', '404.html'))
})
 
const port = 3000;
app.listen(port, () => {
  console.log(`server running on port http://localhost:${port}`)
})
