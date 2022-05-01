const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr=[];
  let arrNumber=String(n).split('');
  for (i=0; i<arrNumber.length; i++) {
    if (i===0) {
      arr.push(arrNumber.slice(i+1).join(''));
    }
    else {
      arr.push(arrNumber.slice(0, i).concat(arrNumber.slice(i+1)).join(''));
    }
  }

  return Math.max(...arr);
}

module.exports = {
  deleteDigit
};
