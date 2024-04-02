//initializing the function
function isPrime(num) {
// 
    if (num <= 1) {
      return false;
    }
 // using for loop to devide by the given index digit has a remainder of zero(x/y=0)    
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
 // if the number has remaider that is not zero   
    return true;
  }
  //a function to filter prime numbers
  function filterPrimeNumbers(numbers) {
//using an empty array where we will store our numbers    
    const primeNumbers = [];
//using for loop to check and push prime numbers to our empty array  
    for (const number of numbers) {
      if (isPrime(number)) {
        primeNumbers.push(number);
      }
    }
//returns all primenumbers    
    return primeNumbers;
  }
  
  console.log(filterPrimeNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,13,17,19,21
  ]));