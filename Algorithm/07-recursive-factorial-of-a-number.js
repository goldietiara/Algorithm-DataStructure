// PROBLEM =^._.^= ∫
// Give a number "n", find the factorial of that integer
// the factorial of a non-integer "n", denoted n! is the product of all positive integers less than or equal to "n"
// factorial of zero is 1
// factorial(4) = 4*3*2*1 = 24
// factorial(5) = 5*4*3*2*1 = 120

// OWY WORK ᕦʕ •`ᴥ•´ʔᕤ
const recursiveFactorial = (n) => {
  if (n === 0) {
    return 1;
  }
  return n * recursiveFactorial(n - 1);
};

console.log(recursiveFactorial(5));

// THE ANSWER ᕦʕ •`ᴥ•´ʔᕤ
const theAnswer = (n) => {
  if (n === 0) {
    return 1;
  }
  return n * theAnswer(n - 1);
};

console.log(theAnswer(5));

// theAnswer(5)
//   -> 5 * theAnswer(4)
//       -> 4 * theAnswer(3)
//           -> 3 * theAnswer(2)
//               -> 2 * theAnswer(1)
//                   -> 1 * theAnswer(0)
//                       -> returns 1 (base case)
//                   -> returns 1 * 1 = 1
//               -> returns 2 * 1 = 2
//           -> returns 3 * 2 = 6
//       -> returns 4 * 6 = 24
//   -> returns 5 * 24 = 120
// So, "recursion unfolds" refers to the process of these recursive calls happening,
// and then the subsequent returns as the recursion resolves back to the original call.
