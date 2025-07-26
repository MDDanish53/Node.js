const {sumRequestHandler} = require("./sum");

const requestHandler = (req, res) => {
  console.log(req.url, req.method);
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
      <html>
        <head>
          <title>
            Practise Set
          </title>
        </head>
        <body>
          <h1>Welcome to Calculator</h1>
          <a href="/calculator">Go To Calculator</a>
        </body>
      </html>
      `);
    return res.end();
  } else if (req.url.toLowerCase() === "/calculator") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
      <html>
        <head>
          <title>
            Calculator
          </title>
        </head>
        <body>
          <h1>Calculator</h1>
          <form action="/calculate-result" method="POST">
            <input type="text" placeholder="First Number" name="first"/>
            <input type="text" placeholder="Second Number" name="second"/>
            <input type="submit" value="Sum"/>
          </form>
        </body>
      </html>
      `);
    return res.end();
  } else if (req.url === "/calculate-result" && req.method == "POST") {
    return sumRequestHandler(req, res);
  }
  res.setHeader("Content-Type", "text/html");
  res.write(`
      <html>
        <head>
          <title>
            Error
          </title>
        </head>
        <body><h1>Error 404 : Page Not Exists</h1>
          <a href="/">Go To Home</a>
        </body>
      </html>
      `);
  return res.end();
};

//it is exported as an object so we have to destructure it while importing
exports.requestHandler = requestHandler;
