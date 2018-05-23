/**
 * Objects, Functions and 'this'
 */

 console.log(this);

 function a(){
   // this referes to the global object
   console.log(this);
   // newVariable is attached to the global object
   this.newVariable = "Hello!";
 }

var b = function(){
  //this referes to the global object
  console.log(this);
}

 // Invoking 'a' creates an execution context
 a();
 b();

 console.log(newVariable);

 var c = {
   name: 'The c object',
   log: function(){
     console.log(this);
   }
 };

 c.log();