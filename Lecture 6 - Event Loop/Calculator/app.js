const http = require('http')
//destructuring the Handler
const {requestHandler} = require('./handler')

const server = http.createServer(requestHandler)

const port = 3000;
server.listen(port, () => {
  console.log(`server running on port http://localhost:${port}`)
})