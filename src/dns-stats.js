const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {

  let dns={};
  domains.forEach(v=>{
    for (i=0; i<v.split('.').length; i++) {
      let revers = '.'+v.split('.').slice(i).reverse().join('.');

      if ([revers] in dns) {
        dns[revers]++;
      }
      else {
        dns[revers]=1;
      }
    }
  })
  return dns;

}

module.exports = {
  getDNSStats
};
