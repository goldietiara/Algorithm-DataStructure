// PROBLEM =^._.^= ∫
// Give an array of "n" element and a target element "t",
// find the index of "t" in the array, return -1 if the target element is not found
// arr = [-5, 2, 10, 4, 6] t = 10 -> return 2
// arr = [-5, 2, 10, 4, 6] t = 6  -> return 4
// arr = [-5, 2, 10, 4, 6] t = 20 -> return -1

// OWY WORK ᕦʕ •`ᴥ•´ʔᕤ
let arr = [-5, 2, 10, 4, 6];

const linearSearch = (arr, n) => {
  for (let i = 0; i < arr.length; i++) {
    if (i === arr.length - 1 && arr[i] != n) {
      return -1;
    }

    if (arr[i] === n) {
      return i;
    }
  }
};
console.log(linearSearch(arr, 6)); //4
console.log(linearSearch(arr, 10)); //2
console.log(linearSearch(arr, 22)); //-1

// The Answer
const theAnswer = (arr, n) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === n) {
      return i;
    }
  }
  return -1;
};
console.log(theAnswer(arr, 6)); //4
console.log(theAnswer(arr, 10)); //2
console.log(theAnswer(arr, 22)); //-1
