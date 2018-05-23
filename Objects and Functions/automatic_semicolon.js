/**
 * Dangerous: Automatic Semicolon Exeption
 * Semicolons are optional;
 * Anywhere the syntax parser expects a semicolon to be
 * it will put one for you.
 * You should always put your semicolons
 */

 function getPerson(){
   return //;
   {
     firstname: "Tony"
   }
 }

 console.log(getPerson());
 //undefined

 /**
  * The syntax parser added a semicolon at the end of the return
  * statement.
  * 
  * So a way of solve it is starting the returned object in the same
  * line of the return statement:
  * 
  * return {
  *   firstname: "Tony"
  * }
  */

