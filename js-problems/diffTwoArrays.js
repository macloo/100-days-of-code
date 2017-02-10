// https://www.freecodecamp.com/challenges/diff-two-arrays

/*
   Compare two arrays and return a new array with any items only found in one
   of the two given arrays, but not both. In other words, return the symmetric
   difference of the two arrays. In a Venn diagram, this is all contents of two
   sets EXCEPT where they overlap.
*/

// provide two arrays
var x = [1, "calf", 3, "piglet", "foal"];
var y = [1, "calf", 3, 4, 5];

// option 1
// popping each item to compare with all others in array
function diffArray(arr1, arr2) {
  var newArr = [];
  // merge the two arrays into a new one
  var comboArray = arr1.concat(arr2);
  while (comboArray.length > 0) {
    var a = comboArray.pop();
    // is a matched? if not, add to array
    if (comboArray.indexOf(a) === -1) {
      newArr.push(a);
    } else {
      // if matched, delete the matched item
      comboArray.splice(comboArray.indexOf(a), 1);
    }
  }
  return newArr;
}

diffArray(x, y);

// option 2
// different way to do it - longer, but uses .reduce() instead of pop
function reduceDiff(arr1, arr2) {
  var newArr = [];
  // merge the two arrays into a new one
  var comboArray = arr1.concat(arr2);

  var countEach = comboArray.reduce(function(newObj, item) {
    if (item in newObj) {
      // increase value of this key
      newObj[item]++;
    } else {
      // create new key and set value to 1
      newObj[item] = 1;
    }
    return newObj; // this becomes value of countEach
  }, {} );  // note that {} sets up a new empty object so that
            // each array item can become a key followed by a count value

  // put only unique items into array
  for (var key in countEach) {
    if (countEach[key] === 1) {
      newArr.push(key);
    }
  }
return newArr;
}

reduceDiff(x, y);

// option 3
// another way to do it - uses .filter() instead of .reduce()

function filterDiff(arr1, arr2) {
  var newArr = [];
  // merge the two arrays into a new one
  var comboArray = arr1.concat(arr2);
  newArr = comboArray.filter(countItems);
  return newArr;
}

function countItems(value, index, array) {
  var count = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      count++;
    }
  }
  if (count > 1) {
    return false;
  } else {
    return value;
  }
}

filterDiff(x, y);


// if ( !arr1.includes(item) || !arr2.includes(item) )
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes

// option 4
// also uses .filter() - and .includes()

function filterOtherWay(arr1, arr2) {
  var newArr = [];
  // merge the two arrays into a new one
  var comboArray = arr1.concat(arr2);
  // .filter() doesn't need a loop - the callback function testMatches()
  // will be run against each item in comboArray
  newArr = comboArray.filter(testMatches);
  return newArr;
}

function testMatches(value) {
  // if value is missing from one of the two arrays
  if ( !x.includes(value) || !y.includes(value) ) {
    // values that pass the test go into newArr in filterOtherWay()
    return value;
  }
}

filterOtherWay(x, y);
