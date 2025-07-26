const http = require('http')
//importing the module
const requestHandler = require('./user')

const server = http.createServer(requestHandler);

const port = 3000;
server.listen(port, () => {
  console.log(`server running on http://localhost:${port}`)
})
