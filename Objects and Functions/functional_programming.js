/**
 * Functional Programming
 *  
**/

var arr1 = [1, 2, 3];
console.log(arr1);

var arr2 = [];
for ( var i = 0; i < arr1.length; i++){
  arr2.push(arr1[i] * 2);
}

console.log(arr2);

function mapForEach(arr, fn) {
  var newArr = [];
  for ( var i = 0; i < arr.length; i++){
    newArr.push(
      fn(arr[i])
    );
  }
  return newArr;
}

arr2 = mapForEach(arr1, function(item){
  return item * 2;
});

console.log(arr2);

var arr3 = mapForEach(arr1, function(item){
  return item > 2;
});

console.log(arr3);

var checkPastLimit = function(limiter, item) {
  return item > limiter;
};

var arr4 = mapForEach(arr1, checkPastLimit.bind(this, 2));
console.log(arr4);