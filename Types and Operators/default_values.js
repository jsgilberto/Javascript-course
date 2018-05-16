/**
  * Default Values
**/

function greet(name) {
  // In this case, the OR operator, returns the first value that
  // coerces to true.
  // if name has a value, it returns name
  // if name has no value, it returns the next coerced (true) value
  name = name || '<your name here>';
  console.log("hello " + name);
}

greet("tony");
greet();

// Framework Aside:
// This is used to check if there is another variable with the same name
// if there is, don't do anything
// if there isn't assing Lib 2
var libraryName = this.libraryName || "Lib 2";
