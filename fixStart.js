// Basic pseudocode
// get the first character str
// using the first character from str and checking to see if there are any other letters that are the same as the first
// then take those letters and replace them with *



let fixStart = word => {
    let firstCharacter = word.charAt(0);
    var outputStr = '';
    // literate through the entire string pushing letters into a new string unless it is the first letter
    for (let i = 0; i < word.length; i++) {
      // if the letter is the first letter AND we are not checking the first letter
      if (word[i] === firstCharacter && i !== 0) {
        outputStr += '*'
      } else {
        outputStr += word[i];
      }
      
    }
    return outputStr;
  }

  console.log(fixStart('mamia'));
  console.log( fixStart('turtle')); // tur*le
