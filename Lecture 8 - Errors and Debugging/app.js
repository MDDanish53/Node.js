const http = require('http')
const testingSyntax = require('./syntax')
const runtime = require('./runtime')
const logical = require('./logical')

const requestHandler = require('./user')

const server = http.createServer(requestHandler);

//const server = http.createServer((req, res) => {
 // console.log(req.url, req.method);
  //testingSyntax();
  //runtime();
 // logical();
//})

const port = 3000;
server.listen(port, () => {
  console.log(`server running on port http://localhost:${port}`)
})