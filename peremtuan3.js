let num = [1, 1, 2, 2, 2, 3, 3, 3, 3]
let count = {};
frequentyNumber(num, count)
function frequentyNumber(array, object) {
  for (i = 0; i < array.length; i++) {
    let currentNum = array[i];
    if (count[currentNum] !== undefined) {
      object[currentNum] += 1;
    } else {
      object[currentNum] = 1;
    }
  }
  console.log(object);
}
function duplicatedNumber(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
      let jikaDuplikat = false;
      for (let j = 0; j < array.length; j++) {
          if (i !== j && array[i] === array[j]) {
              jikaDuplikat = true;
              break;
          }
      }   
      if (!jikaDuplikat) {
          result.push(array[i]);
      }
  }
  return result;
}
num = [1, 2, 2, 3, 3, 4, 5, 5];
console.log(duplicatedNumber(num));
function checkSimilarity(array1, array2) {
  let result = [];
  for (let i = 0; i < array1.length; i++) {
      for (let j = 0; j < array2.length; j++) {
          if (array1[i] === array2[j] && !result.includes(array1[i])) {
              result.push(array1[i]);
          }
      }
  }
  return result;
}
const num1 = [7, 8, 9];
const num2 = [7, 9, 10, 11];
console.log(checkSimilarity(num1, num2));
