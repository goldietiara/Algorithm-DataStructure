// PROBLEM =^._.^= ∫
// Give a positive integer 'n', determine if the number is a power of 2 or not
// An integer is a power of two if there exists an integer "x" such that "n" === 2x
// isPowerOfTwo(1) true (2ˆ0)
// isPowerOfTwo(2) true (2ˆ1)
// isPowerOfTwo(5) false

// OWY WORK ᕦʕ •`ᴥ•´ʔᕤ

const isPowerOfTwo = (n) => {
  let i = 1;
  let num = n;
  if (n < 2) {
    return `number ${num} is a power of two`;
  }
  for (; i < n; i++) {
    num = num / 2;
    if (num === 1) {
      return `number ${n} = 2ˆ${i} is a power of two`;
    }
  }
  return `${n} is not a power of two`;
};

console.log(isPowerOfTwo(1));

// THE ANSWER
const theAnswer = (n) => {
  if (n < 1) {
    return false;
  }
  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }
    n = n / 2;
  }
  return true;
};

console.log(theAnswer(32));

// bitwise
// O(1) complexity
const theAnswer2 = (n) => {
  if (n < 1) {
    return false;
  }
  return (n & (n - 1)) === 0;
};

console.log(theAnswer2(32));
