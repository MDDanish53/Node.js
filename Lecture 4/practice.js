const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(
      `<html>
        <head>
         <title>Amazon</title>
        </head>
        <body>
         <h1>Welcome to our site</h1>
         <a href="/home">Home</a>
         <a href="/men">Men</a>
         <a href="/women">Women</a>
         <a href="/kids">Kids</a>
         <a href="/cart">Cart</a>
      </body>
      </html>
      `
    );
    return res.end();
  } else if (req.url.toLowerCase() === "/home") {
    res.setHeader("Content-Type", "text/html");
    res.write(
      `<html>
        <head>
         <title>Home</title>
        </head>
        <body>
          <p>Welcome to Home Page</p>
          <a href="/home">Home</a>
          <a href="/men">Men</a>
          <a href="/women">Women</a>
          <a href="/kids">Kids</a>
          <a href="/cart">Cart</a>
        </body>
        </html>`
    );
    return res.end();
  } else if (req.url.toLowerCase() === "/men") {
    res.setHeader("Content-Type", "text/html");
    res.write(
      `<html>
        <head>
         <title>Men</title>
        </head>
        <body>
         <p>Welcome to Mens Page</p>
         <a href="/home">Home</a>
         <a href="/men">Men</a>
         <a href="/women">Women</a>
         <a href="/kids">Kids</a>
         <a href="/cart">Cart</a>
       </body>
      </html>`
    );
    return res.end();
  } else if (req.url.toLowerCase() === "/women") {
    res.setHeader("Content-Type", "text/html");
    res.write(
      `<html>
        <head>
         <title>Women</title>
        </head>
        <body>
         <p>Welcome to Women's Page</p>
         <a href="/home">Home</a>
         <a href="/men">Men</a>
         <a href="/women">Women</a>
         <a href="/kids">Kids</a>
         <a href="/cart">Cart</a>
       </body>
      </html>`
    );
    return res.end();
  } else if (req.url.toLowerCase() === "/kids") {
    res.setHeader("Content-Type", "text/html");
    res.write(
      `<html>
        <head>
         <title>Kids</title>
        </head>
        <body>
         <p>Welcome to Kids Page</p>
         <a href="/home">Home</a>
         <a href="/men">Men</a>
         <a href="/women">Women</a>
         <a href="/kids">Kids</a>
         <a href="/cart">Cart</a>
       </body>
      </html>`
    );
    return res.end();
  } else if (req.url.toLowerCase() === "/cart") {
    res.setHeader("Content-Type", "text/html");
    res.write(
      `<html>
        <head>
         <title>Cart</title>
        </head>
        <body>
         <p>Welcome to Cart Page</p>
         <a href="/home">Home</a>
         <a href="/men">Men</a>
         <a href="/women">Women</a>
         <a href="/kids">Kids</a>
         <a href="/cart">Cart</a>
       </body>
      </html>`
    );
    return res.end();
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Error</title></head>");
  res.write("<body><h1>Page Not Found</h1></body>");
  res.write('<a href="/">Go to Home</a>')
  res.write("</html>");
  res.end();
});

const port = 3000;
server.listen(port, () => {
  console.log(`server running on port http://localhost:${port}`);
});
