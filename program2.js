function generateArray(start, end) {
    // Initialize an empty array to store the generated numbers
    const result = [];
  
    // Determine the direction of the range
    const step = start <= end ? 1 : -1;
  
    // Loop from the start number to the end number, inclusive
    for (let i = start; i !== end + step; i += step) {
      // Push the current number to the result array
      result.push(i);
    }
  
    // Return the generated array
    return result;
  }
  console.log(generateArray(4, 7));  
  console.log(generateArray(-4, 7));



//   var x = 1;
// let y = 1;

// if (true) {
//   var x = 2;
//   let y = 2;
// }

// console.log(x);
// // Expected output: 2

// console.log(y);
// // Expected output: 1
