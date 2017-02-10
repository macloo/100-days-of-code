// https://www.freecodecamp.com/challenges/roman-numeral-converter

/*
I 1
V 5
X 10
L 50
C 100
D 500
M 1000
*/

function convertToRoman(num) {
  var string = "";
  var div;
  while (num > 0) {
    if (num >= 1000) {
      div = Math.floor( num / 1000 );
      num = num % 1000;
      for (var i = 0; i < div; i++) {
        string += "M";
      }
    } else if (num >= 100) {
      div = Math.floor( num / 100 );
      num = num % 100;
      string += buildRoman(div, "C", "D", "M");
    } else if (num >= 10) {
      div = Math.floor( num / 10 );
      num = num % 10;
      string += buildRoman(div, "X", "L", "C");
    } else if (num >= 1) {
      div = num;
      num = 0;
      string += buildRoman(div, "I", "V", "X");
    }
  }
  return string;
}

function buildRoman(div, one, five, ten) {
  var string = "";
  if (div <= 3) {
    for (var i = 0; i < div; i++) {
      string += one;
    }
  } else if (div == 4) {
    string += one + five;
  } else if (div == 5) {
    string += five;
  } else if (div < 9) {
    string += five;
    for (var i = 0; i < div - 5; i++) {
      string += one;
    }
  } else if (div == 9) {
    string += one + ten;
  }
  return string;
}

console.log( convertToRoman(2345) );
