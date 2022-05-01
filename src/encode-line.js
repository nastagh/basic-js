const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let counter =0;
  let arr=[];
  
  for (i=0; i<str.length; i++) {
    counter ++;
    if (str[i]!==str[i+1]) {
      arr.push(counter,str[i]);
      counter=0;
    }
  }
  return arr.join('').replace(/[1]/g,'');
}

module.exports = {
  encodeLine
};
