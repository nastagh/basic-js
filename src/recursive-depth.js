const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth (arr) {
    let depthArray = [];
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        depthArray.push(this.calculateDepth(arr[i]));
      }
      else {
        depthArray.push(0);
      }
    }
    let childDepth = 0;
    if (depthArray.length != 0) {
      childDepth = Math.max.apply(null,depthArray);
    }
    return 1 + childDepth;
  }
}

module.exports = {
  DepthCalculator
};

