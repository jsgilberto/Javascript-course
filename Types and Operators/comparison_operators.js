// The following statement returns true
console.log(3 < 2 < 1);
// The operators have the same order of precedence, so what gets executed first?
// we have associativty to decide that;
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
// looking at the table above, we see that associativity for '<' operator is left to right
// So the code above go as follows:
console.log( false < 1);
// so false gets coerced by the JavaScript Engine to a number:
var number = Number(false);
console.log(false);
// and we end up with:
console.log( 0 < 1);
//which ends up being true!

// Another common example of what coercion makes is with the equal operator
console.log("Equal Operator:");
console.log(3 == 3);
// This is dangerous, given that one is a string and the other a number
console.log('3' == 3);
console.log(false == 0);
console.log(true == 1);
console.log("" == 0);
console.log("" == false);

// So in JavaScript we use '===' the strict equal operator
// with this operator, the engine doesnt try to automatically coerce the values
console.log("Strict Equal Operator");
console.log(3 === 3);
console.log('3' === 3);
console.log(false === 0);
console.log(true === 1);
console.log("" === 0);
console.log("" === false);

// Equality Comparison Tables
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness