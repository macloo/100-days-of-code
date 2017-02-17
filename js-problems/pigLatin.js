// https://www.freecodecamp.com/challenges/pig-latin

// Translate the provided string to pig latin.
// If a word begins with a vowel you just add "way" to the end.

function translatePigLatin(str) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  // grab the first letter of the word
  var first = str.substring(0, 1);
  // if first is in vowels
  if ( vowels.indexOf(first) >= 0 ) {
    str = str + "way";
  } else {
    // detect consonant clusters
    var i = 1;
    var rest = "";
    while (rest == "") {
      // grab next letter
      var next = str.substring(i, i + 1);
      // if next is not in vowels
      if ( vowels.indexOf(next) === -1 ) {
        first += next;
        i++;
      } else {
        // grab the rest of the word
        rest = str.substring(i);
      }
    }
    str = rest + first + "ay";
  }
  // put it back together in pig Lation style
  return str;
}

translatePigLatin("consonant");
