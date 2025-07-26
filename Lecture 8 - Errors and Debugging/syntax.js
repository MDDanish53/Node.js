const testingSyntax = () => {
  console.log("I am in testing Syntax")
  //Missing parenthesis in function call
  console.log("Hello World");
  
  // Unclosed string literal
  let message = "Welcome to node.js";
  
  // Improper use of reserved keywords
  let num = 5;
  
  //Incorrect variable declaration (const needs an initial value)
  const myVar = 2;
};

module.exports = testingSyntax;