// https://www.freecodecamp.com/challenges/sum-all-numbers-in-a-range

/*
using:
Math.max()
Math.min()
Array.prototype.reduce()
*/


function sumAll(arr) {
  var x = Math.min(arr[0], arr[1]);
  var y = Math.max(arr[0], arr[1]);
  var newArray = [];
  for (var i = x; i < y + 1; i++) {
    newArray.push(i);
  }
  // add all numbers in the array
  var result = newArray.reduce(function(a, b) {
    return a + b;
    });
  return result;
}

sumAll([1, 4]);
