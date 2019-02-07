/************************************************************************************************
 * Execution :   default node : cmd> node primeFactor.js
 *              
 * Purpose   :   To Print the prime factors of number N. 
 * 
 * @description
 * @file     :   primeFactor.js
 * @overview :   It takes the user input and Computes the prime factorization of N using brute force. 
 * @author   :   Bhavana Sai  <bhavanab1506@gmail.com>
 * @version  :   1.0
 * @since    :   24/01/2019

 ****************************************************************************************************/


var utility = require("../utility/utility");
var read = require("readline-sync");
var num = read.question("Enter the number: ");
utility.findPrimeFactor(num);

