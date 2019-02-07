/************************************************************************
 * Execution :   default node : cmd> node binarySearch.js
 *              
 * Purpose   :   To print the binary number or string to the given number or string.
 * 
 * @description
 * @file     :   binarySearch.js
 * @overview :   A function to binary which accepts the input to find the string or the number.
 * @author   :   Bhavana Sai  <bhavanab1506@gmail.com>
 * @version  :   1.0
 * @since    :   29/01/2019

 **************************************************************************/


var utility = require('../utility/utility');
var read = require('readline-sync')
var arr = [];
var size = read.question("Enter the size of the array = ");
for (let i = 0; i < size; i++) {
    arr[i] = read.question("Enter the array elements = ");
}
var search = read.question("Enter the string to search = ");
var result1 = utility.binarySearchInt(arr, search);
console.log(result1);
//var result2 = utility.binarySearchStr(arr, search);
//console.log(result2);
