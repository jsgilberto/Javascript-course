/**
  * Operator Precedence:
  * which operator function gets called first.
  * (functions are called in order of precedence)
  * (HIGHER precedence wins).
  *
  * Associativity:
  * what order functions get called in:
  * left-to-right or right-to-left
  * (when functions have the same precedence)
**/

// Table of Operator Precedence and Associativity:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
// Remember, JavaScript is synchronous, so it has to invoke
// one operator function first.
// There is a table with the Operator precedence
// In this case, the multiplication operator has higher precedence
// So it gets executed first
var a = 3 + 4 * 5;
console.log(a);

// All the next variables will return 4 because of Associativity
// The assignment operator associativity is right-to-left
var a = 2, b = 3, c = 4;
a = b = c;
console.log(a);
console.log(b);
console.log(c);