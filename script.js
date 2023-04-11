//your JS code here. If required.
function firstNonRepeatedCharacter() {
  let str = prompt("Enter a string:");
  let charCount = {};
  
  // Iterate through the string and count the frequency of each character
  for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i);
    charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
  }
  
  // Find the first non-repeated character
  for (let j = 0; j < str.length; j++) {
    let char = str.charAt(j);
    if (charCount[char] === 1) {
      return char;
    }
  }
  
  return null; // If no non-repeated character is found
}

// Call the function and log the result
console.log(firstNonRepeatedCharacter());
