

function swapCase(string) {
    // Initialize an empty string to store the result
    let required = '';
  
    // Iterate over each character in the input string
    for (let i = 0; i < string.length; i++) {
      // Check if the character is uppercase
      if (string[i] === string[i].toUpperCase()) {
        // Convert uppercase character to lowercase and add to result
        required += string[i].toLowerCase();
      } else {
        // Convert lowercase character to uppercase and add to result
        required += string[i].toUpperCase();
      }
    }
  
    // Return the swapped string 
    return required;
  }
  console.log(swapCase('tHE qUICK bROWN fOX'));
  console.log(swapCase("You ARE vERy RiGHt"));
  