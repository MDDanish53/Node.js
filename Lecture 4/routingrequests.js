const http = require("http");

const server = http.createServer((req, res) => {
  //changing response based on url
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(
      "<html><head><title>Home</title></head><body><h1>Welcome to our website</h1></body></html>"
    );
    return res.end();
  } else if (req.url === "/products") {
    res.setHeader("Content-Type", "text/html");
    res.write(
      "<html><head><title>Our Products</title></head><body><h1>Checkout our most trending products</h1></body></html>"
    );
    return res.end();
  }
  res.setHeader("Content-Type", "text/html");
  res.write(
    "<html><head><title>Thanks For Visiting</title></head><body><h1>Support us by providing your valuable feedback</h1></body></html>"
  );
  res.end();
});

const port = 3000;
server.listen(port, () => {
  console.log(`server running on port http://localhost:${port}`);
});
