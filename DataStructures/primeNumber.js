/************************************************************************
 * Execution :   default node : cmd> node primeNumber.js
 *              
 * Purpose   :   To find the Prime numbers in the given range.
 * 
 * @description
 * @file     :   primeNumber.js
 * @overview :   It stores the prime numbers in a 2D Array, the first dimension represents the
 *               range 0-100, 100-200, and so on. While the second dimension represents the prime
 *               numbers in that range.
 * @author   :   Bhavana Sai B  <bhavanab1506@gmail.com>
 * @version  :   1.0
 * @since    :   4/02/2019

 **************************************************************************/

var util = require('../utility/utilityDataStructure');
function primes() {
    var primes = [];
    var start = 0;
    var end = 100;
    for (let i = 0; i < 10; i++) {
        primes[i] = util.isPrime(start, end)
        console.log(start + " " + end + ":" + "[" + primes[i] + "]");
        start = start + 100;
        end = end + 100;
    }
}
primes();