// PROBLEM =^._.^= ∫
// Give an integer 'n', find the factorial of that integer
// in math, the factorial of a non-negative integer 'n', denoted n!, is the product of all positive integers less than or equal to 'n'
// factorial of zero is 1
// factorial(4) = 4*3*2*1 = 24
// factorial(5) = 5*4*3*2*1 = 120

// OWY WORK ᕦʕ •`ᴥ•´ʔᕤ
const factorial = (n) => {
  let result = 1;
  let arr = [0];
  for (let i = 1; i < n; i++) {
    arr.push(i);
    result = arr[i] * result;
  }
  return result;
};

console.log(factorial(6));

// THE ANSWER
const theAnswer = (n) => {
  let res = 1;
  for (let i = 1; i < n; i++) {
    res = res * i;
  }
  return res;
};

console.log(theAnswer(6));
