const http = require('http')

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  //sending response in HTML form
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>')
  res.write('<head>')
  res.write('<title>')
  res.write('Mohammad Danish')
  res.write('</title>')
  res.write('</head>')
  res.write('<body>')
  res.write('<h1>')
  res.write('Welcome to my website')
  res.write('</h1>')
  res.write('</body>')
  res.write('</html>')
  res.end(); //ending the response
})

const port = 3000;
server.listen(port, () => {
  console.log(`server running on port http://localhost:${port}`);
}) 
