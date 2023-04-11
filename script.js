//your JS code here. If required.
function firstNonRepeatedChar() {
  let str = prompt("Please enter a string:");
  let charCount = {};
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }
  for (let j = 0; j < str.length; j++) {
    let char = str[j];
    if (charCount[char] === 1) {
      return char;
    }
  }
  return null;
}

// example usage
let result = firstNonRepeatedChar();
console.log(result);

