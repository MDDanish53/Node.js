const sumRequestHandler = (req, res) => {
  console.log("1. In Sum Request Handler", req.url);
  const body = [];
  //creating result varaible outside the req.on('end')
  let result;
  req.on("data", (chunk) => {
    body.push(chunk);
    console.log("2. Chunk came")
});
  req.on("end", () => {
    console.log("3. End event came")
    const bodyStr = Buffer.concat(body).toString();
    const params = new URLSearchParams(bodyStr);
    const bodyObj = Object.fromEntries(params);
    result = Number(bodyObj.first) + Number(bodyObj.second);
    console.log(result);
  });
  console.log("4. Sending the response")
  res.setHeader("Content-Type", "text/html");
    res.write(`
      <html>
        <head>
          <title>
            Error
          </title>
        </head>
        <body><h1>Your sum is ${result}</h1>
          <a href="/">Go To Home</a>
        </body>
      </html>
      `);
    return res.end();
};

exports.sumRequestHandler = sumRequestHandler;
