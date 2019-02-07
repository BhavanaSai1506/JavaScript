/************************************************************************
 * Execution :   default node : cmd> node stringPermutation.js
 *              
 * Purpose   :   To Check if the arrays returned by two string functions are equal. 
 * 
 * @description
 * @file     :   stringPermutation.js
 * @overview :   Functions to return all permutation of a String using iterative method 
 *               and Recursion method.
 * @author   :   Bhavana Sai  <bhavanab1506@gmail.com>
 * @version  :   1.0
 * @since    :   29/01/2019

 **************************************************************************/


var utility = require("../utility/utility");
var readline = require("readline-sync");
var string = readline.question("Enter the string = ");
var result =utility.getStringPermutation(string);
console.log(result);

