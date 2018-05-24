
function buildFunctions(){

  var arr = [];

  for(var i = 0; i < 3; i++){
    arr.push(
      function(){
        console.log(i);
      }
    );
  }

  return arr;
}

var fs = buildFunctions();
fs[0]();
fs[1]();
fs[2]();

// All the invoked functions returned 3!
// That's because every function stored made a reference to
// the 'i' variable
// So when the for loop ends, it ends with 'i = 3'
// And because all the functions are pointing to 'i', it prints 3.

// But what if you wanted to do the opposite?


function buildFunctions2(){

  var arr = [];

  for(let i = 0; i < 3; i++){
    //let i creates a new instance of i everytime the block is run
    arr.push(
      function(){
        console.log(i);
      }
    );
  }

  return arr;
}

var fs2 = buildFunctions2();
fs2[0]();
fs2[1]();
fs2[2]();