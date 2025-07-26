const http = require("http");
const requestHandler = require('./requestHandler')

const server = http.createServer(requestHandler);

const port = 3000;
server.listen(port, () => {
  console.log(`server running on port http://localhost:${port}`);
});
