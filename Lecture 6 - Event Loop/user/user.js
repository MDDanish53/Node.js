const fs = require('fs');

const userRequestHandler = (req, res) => {
  console.log(req.url, req.method)
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
    //reading the data of user
    const body = [];
    req.on('data', (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    //this function runs when all chunks are came
    req.on('end', () => {
      //getting meaningful data
      const fullBody = Buffer.concat(body).toString();
      console.log(fullBody);
      //getting params from data
      const params = new URLSearchParams(fullBody);
      //creating objects from params (method-2)
      const bodyObject = Object.fromEntries(params);
      console.log(bodyObject);
      fs.writeFile('danish.txt', JSON.stringify(bodyObject), (error) => {
        console.log("Data written successfully")
        res.statusCode = 302; //redirection code
        res.setHeader('Location', '/'); //redirect to the home page
        return res.end();
      });
    })
  } else {
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>')
  res.write('<head><title>Thanks For Submission</title></head>')
  res.write('<body><h1>Thanks for form submission</h1></body>')
  res.write('</html>')
  }
}

//exporting our module
module.exports = userRequestHandler;
