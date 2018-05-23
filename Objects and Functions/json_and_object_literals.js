/**
 * JSON and Object Literals
 * JSON: JavaScript Object Notation
 */

 var objectLiteral = {
   firstname: "Mary",
   isAProgrammer: true
 };

 // Here we are taking an object and converting it to a JSON
 console.log(JSON.stringify(objectLiteral));

// JSON:
// Anything that is JSON valid, is also JavaScript valid
// but not all object literal syntax is valid JSON.
// JSON is not part of JavaScript
// JSON needs to have double quotes in the names (or properties)

// Here we are taking a JSON and converting it to an object
var jsonValue = JSON.parse(
  '{"firstname": "Mary", "isAProgrammer": true}');

console.log(jsonValue);
