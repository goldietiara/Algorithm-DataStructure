// PROBLEM =^._.^= ∫
// Give a number 'n', find the first 'n' elements of the Fibonacci Sequence
// Fibonacci Sequence is a sequence in which each number is the sum of the two preceding ones
// The First two number in the sequence are 0 and 1
// fibonacci(2) = [0,1]
// fibonacci(3) = [0,1,1]
// fibonacci(7) = [0,1,1,2,3,5,8]

// OWY WORK ᕦʕ •`ᴥ•´ʔᕤ
const fibonacci = (n) => {
  let f = [0, 1];
  for (let i = 0; i < n; i++) {
    f.push(f[f.length - 2] + f[f.length - 1]);
  }
  return f;
};

console.log(fibonacci(5));

// THE ANSWER
const theAnswer = (n) => {
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
};

console.log(theAnswer(7));
