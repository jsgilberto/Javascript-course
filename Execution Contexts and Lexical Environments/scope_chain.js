/**
 * Every execution context has a reference to it's outer environment
 * The outer environment for function b is the Global Execution context
 * The outer environment for function a is also the Global Execution context
 * 
 * It just means that every function that exists is stored horizontally in memmory
 * As opposed to when you call the functions, they are stacked and they are on top of another
 * So every function sitting in the Global Execution context or the outer environment.
 * 
**/

function b(){
  console.log(myVar);
}

function a(){
  // function b is sitting inside function a, so the outer environment of b, is a.
  /** function b(){
    *   console.log(myVar);
    * }
  **/
  var myVar = 2;
  b();
}

var myVar = 1;
a();