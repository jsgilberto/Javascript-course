/**
  * Object:
  * Is a collection of name and value pairs
  * An object can have a Primitive (property)
  * An object can have an object (often as a child) (property)
  * An object can have a function (method)
 */

 var person = new Object();

 person["firstname"] = "Tony";
 person["lastname"] = "Lolo";

 var firstNameProperty = "firstname";

 console.log(person);
// Using the square brackets operator
 console.log(person[firstNameProperty]);

// Using the dot operator (again, the dot operator is a special function)
 console.log(person.firstname);