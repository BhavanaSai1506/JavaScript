/************************************************************************
 * Execution :   default node : cmd> node findNumber.js
 *              
 * Purpose   :  Use Binary Search to find the number.
 * 
 * @description
 * @file     :   findNumber.js
 * @overview :   Takes a command-line argument N, asks you to think of a number between 0 and N-1,
 *               where N = 2^n, and always guesses the answer with n questions, the Number N and 
 *               then recursively ask true/false if the number is between a high and low value.
 * @author   :   Bhavana Sai  <bhavanab1506@gmail.com>
 * @version  :   1.0
 * @since    :   28/01/2019

 **************************************************************************/


var utility = require("../utility/utility");
var read = require("readline-sync");
var N = process.argv[2];
var result = utility.findNumber(0, N - 1, read);
console.log("Your number is = " + result);
