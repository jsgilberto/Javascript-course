/**
 * Functions are Objects
 * 
 * FIRST CLASS FUNCTIONS:
 * Everything you can do with other types you can do with functions
 * ie. Assign them to variables, pass them around, create them on the fly.
 * 
 * A Function is a special type of object
 * It's possible to attach primitives, objects or functions to a function
 * 
 * The function object has some hidden special properties:
 * 1.- name (optional, can be anonymous)
 * 2.- code (the actual lines of code written) <- this property is invocable(), you can say "run this code"
 * 
 */

 function greet(){
   console.log("hi");
 }

 // We can attach properties to a function, just like any other object
 greet.language = "english";
 console.log(greet.language);
 //it has a hidden property called name which stores the name of the function
 console.log(greet.name);
 