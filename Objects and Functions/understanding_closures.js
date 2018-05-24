/**
 * Understanding Closures:
 */

 // greet is a function that returns a function
 function greet(whattosay) {

  return function(name){
    console.log(whattosay + ' ' + name);
  }

 }

 // greet returns a function, so yo can invoke it!
 greet("Hi")("Tony");

 //sayHi stores the returned function by greet
 var sayHi = greet("Hi");
 sayHi("Tony");

 // The returned function still has access to the variables/objects
 // created inside his execution context.
 // So the returned function closes in all the variables created when
 // the function was created. This phenomenom is known as closure.