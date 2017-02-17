// https://www.freecodecamp.com/challenges/search-and-replace

/*
  Perform a search and replace on the sentence using the arguments provided and return the new sentence.
*/


function myReplace(str, before, after) {
  // if before has uppercase first letter
  if ( before !== before.toLowerCase() ) {
    // capitalize first letter of after 
    after = after.charAt(0).toUpperCase() + after.slice(1);
  }
  var arr = str.split(" ");
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == before) {
      arr.splice(i, 1, after);
    }
  }
  str = arr.join(" ");
  return str;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
