'use strict';

const Stack = require('./stack')
const Q = require('./queue')


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
let testQueueArr = [0,1,2,3,4,5,6,7,8,9,10]
solution.queueBuilder = function (arr,pop) {
  if(arr.length <= 0 || typeof arr !== 'object'|| pop < 0)return 'ERROR: Does not compute'
  let q = new Q();

  for(let i = 0; i < arr.length; i++ ) {
    q.enqueue(arr[i])
  }

  for(let k = 0; k < pop; k++ ) {
    q.dequeue()
  }
  return q
}

