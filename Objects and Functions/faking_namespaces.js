/**
 * Frameworks Aside: Faking Namespaces
 * Namespace:
 * A container for variables and functions.
 * Tipically to keep variables and functions with the same
 * name separate.
 */

 // Imagine the first greet comes frome another file
 // and you encounter the same name under your file
 var greet = "Hello!"; //file1.js
 var greet = "Hola!"; //file2.js

 console.log(greet);

 // So in order to fix the problem, we can use objects as containers
 var english = {};
 var spanish = {};

 // Now we have to greet variables and we can access every variable
 english.greet = "Hello!";
 spanish.greet = "Hola!";

 console.log(english.greet);
 console.log(spanish.greet);

 // And you can add various levels to make "fake namespaces" more complex
 var english = {
  greetings: {
    basic: "Hello! :-)"
  }
 };

 console.log(english.greetings.basic);