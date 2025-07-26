//creating first http(used for client's request and response) server

//including the http core module
const http = require('http');

//creating the server
const server = http.createServer((req, res) => {
  console.log(req);
});

//Creating the port
const port = 3000;

//listening the client request
server.listen(port, () => {
  console.log(`server is running at http://localhost:${port}`);
});