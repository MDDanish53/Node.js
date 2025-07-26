const fs = require("fs");

const requestHandler = (req, res) => {
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(
      '<html lang="en"><head><title>Home</title></head><body><h1>Welcome to the calculator</h1><a href="/calculator">Go to Calculator</a></body></html>'
    );
    return res.end();
  } else if (req.url === "/calculator") {
    res.setHeader("Content-Type", "text/html");
    res.write(
      '<html lang="en"><head><title>Home</title></head><body><form action="/calculate-result" method="POST"><p>Enter the First Number = </p><input type="number" name="value1"><p>Enter the Second Number = </p><input type="number" name="value2"><input type="submit" value="Submit"></form></body></html>'
    );
    return res.end();
  } else if (req.url === "/calculate-result" && req.method == "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    req.on("end", () => {
      const fullBody = Buffer.concat(body).toString();
      const params = new URLSearchParams(fullBody);
      const bodyObject = Object.fromEntries(params);
      let val1 = Number(bodyObject.value1);
      let val2 = Number(bodyObject.value2);
      let sum = val1 + val2;
      res.setHeader("Content-Type", "text/html");
      res.write(
        `<html lang="en"><head><title>Home</title></head><body><h1>Result of your calculation is </h1><h2>${sum}</h2></body><a href="/calculator">Calculate Again</a></html>`
      );
      return res.end();
    });
  } else {
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
  }
};

module.exports = requestHandler;
