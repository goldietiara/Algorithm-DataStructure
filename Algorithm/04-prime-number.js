// PROBLEM =^._.^= ∫
// Give a natural number 'n', determine if the number is prime
// A prime number is a numbers that have only 2 factors: 1 and themselves
// isPrime(5) = true (1*5 or 5*1)
// isPrime(4) = false (1*2 or 2*2 or 4*1)

// OWY WORK ᕦʕ •`ᴥ•´ʔᕤ
const isPrime = (n) => {
  if (n < 2) {
    return `number ${n} is false`;
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return `number ${n} is false`;
    }
  }
  return `number ${n} is true`;
};

console.log(isPrime(10));

// THE ANSWER
const theAnswer = (n) => {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

console.log(theAnswer(11));

// /ᐠᵕ ‸ᵕᐟ\ﾉ explanation
// square root do not need to be checked because, whenever "n=a*b", one of the two factors "a" and "b" is less than or equal to the square root of "n"
// by using Math.sqrt() it will checked the n but not as the same size (less time complexity - O(sqrt(n)))
