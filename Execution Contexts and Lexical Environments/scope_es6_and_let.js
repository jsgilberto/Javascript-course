/**
  * Scope:
  * Where a variable is available in your code
**/

// let allows the JavaScript Engine what is called block scoping
// it's safer to use let than to use var

let a = 2;
let b = 1

if ( a > b) {
  // c is only available inside the if statement or 'if block'
  let c = true;
}
// This returns an error, c is not defined
console.log(c);