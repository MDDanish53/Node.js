const runtime = () => {
  console.log("I am in runtime")
  //console.log(x);
  //let num = 34;
  //num()
  //let jsonString = '{name: "John"}'
  //JSON.parse(jsonString)
  const fs = require('fs')
  fs.readFileSync('nonexistentFile.txt')
}

module.exports = runtime;