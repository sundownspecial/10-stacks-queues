'use strict';

const Stack = require('./stack')

const solution = module.exports = {};

solution.curlyString = function (str) {
  let testStack = new Stack();
  if (typeof str !== 'string') return null;
  for (let i = 0; i < str.length; i++) {
    if(str[i]=== '{') testStack.push('{');
    if(str[i]=== '}') {
    if(testStack.size === 0) return 'nothing in que to remove'  
    testStack.pop();
    }
  }
  console.log(testStack)
  if(testStack.top) return 'invalid string';
  return 'valid';
  
};

// solution.curlyString(testString);


solution.binarySearch = function (arr, n) {
  if (typeof n !== 'number' || typeof arr !== 'object' || arr.length === 0) return null;
  let index = Math.floor(arr.length/2);
  let max = arr.length
  let min = 0;
  for (let k = 0; k<(arr.length/(k*1.24)); k++){
    if (arr[index] === n) return `{value: ${arr[index]}, index: ${index}}`;
    if (arr[index] > n) max = index;      
    if (arr[index] < n) min = index;
    index = Math.floor((max+min)/2)
  }
  return 'does not exist';
}

