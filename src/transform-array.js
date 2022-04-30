const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  let transformArray=[];
  arr.forEach((elem) => {
    transformArray.push(elem);
  })

  if (transformArray[0]=='--discard-prev' || transformArray[0]=='--double-prev') {
    transformArray.shift();
  }

  if (transformArray[transformArray.length-1]=='--discard-next' || transformArray[transformArray.length-1]=='--double-next') {
    transformArray.pop();
  }

  for (let i=0; i<transformArray.length; i++) {
    
    switch (transformArray[i]) {
      case '--discard-next':
        transformArray[i+1] = null;
        transformArray[i] = null;
        break;
      case '--discard-prev':
        transformArray[i-1] = null;
        transformArray[i] = null;
        break;
      case '--double-prev':
        transformArray[i] = transformArray[i-1];
        break;
      case '--double-next':
        transformArray[i] = transformArray[i+1];
        break;
    }
  }

  transformArrayFiltered = transformArray.filter(function (el) {
    return el != null;
  });

  return transformArrayFiltered;
}


module.exports = {
  transform
};
