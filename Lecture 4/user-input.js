const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers)
  if(req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>')
    res.write('<head><title>Feedback Form</title></head>')
    res.write('<body>')
    res.write('<h1>Enter your details: </h1>')
    res.write('<form action="/submit" method="POST">')
    res.write('<input type="text" name="username" placeholder="Enter your name" /><br>')
    res.write('<label for="male">Male</label>')
    res.write('<input type="radio" id="male" name="gender" value="male" /><br>')
    res.write('<label for="female">Female</label>')
    res.write('<input type="radio" id="female" name="gender" value="female" /><br>')
    res.write('<input type="submit" value="Submit" />')
    res.write('</form>')
    res.write('</body>')
    res.write('</html>')
    return res.end();
  } else if (req.url.toLowerCase() === '/submit' && req.method == "POST") {
    fs.writeFileSync('danish.txt', "Mohammad Danish");
    res.statusCode = 302; //redirection code
    res.setHeader('Location', '/'); //redirect to the home page
  }
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>')
  res.write('<head><title>Thanks For Submission</title></head>')
  res.write('<body><h1>Thanks for form submission</h1></body>')
  res.write('</html>')
})

const port = 3000;
server.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`)
})
