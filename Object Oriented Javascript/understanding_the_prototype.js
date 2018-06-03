/**
 * Understanding the Prototype
 * 
 * ALL objects in JavaScript have a property called
 * proto. This property is simple a reference to another
 * object called proto. This object can have properties.
 * The proto object has another proto object, and you can
 * keep going in what is called the Prototype Chain.
 * 
 * What is interesting is that objects can share the same
 * prototypes.
 */

 var person = {
   firstname: 'Default',
   lastname: 'Default',
   getFullName: function(){
     return this.firstname + ' ' + this.lastname;
   }
 };

 var john = {
  firstname: 'John',
  lastname: 'Doe'
 };

 // don't do this ever, for demo purposes only
 john.__proto__ = person;
 console.log(john.getFullName());
 console.log(john.firstname);

 var jane = {
   firstname: 'Jane'
 };

 jane.__proto__ = john;
 console.log(jane.getFullName());




