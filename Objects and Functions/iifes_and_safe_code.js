var greeting = "Hola";

//IIFE
(function(global, name){

  var greeting = "Hello";
  global.greeting = "Not Hola anymore";
  console.log(greeting + " " + name);

}(this, "John")); //IIFE

// Any variable that is inside an IIFE is sitting in the function execution context
// So greeting in the global execution context will not be written
// Unless we pass it as an object (objects are passed as reference)
console.log(greeting);
console.log(this.greeting);