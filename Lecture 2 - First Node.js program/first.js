console.log("Mohammad Danish");

const fs = require('fs'); //including module
fs.writeFile("input.txt", "Mohammad Danish", (err) => {
  if (err) console.log("Error occured");
  else console.log('File written successfully.');
})