/************************************************************************
 * Execution :   default node : cmd> node squareRoot.js
 *              
 * Purpose   :  To compute the square root of a nonnegative number.
 * 
 * @description
 * @file     :   squareRoot.js
 * @overview :   initialize t = c, replace t with the average of c/t and t then repeat until 
 *               desired accuracy reached using condition Math.abs(t - c/t) > epsilon*t where 
 *               epsilon = 1e-15;
 * @author   :   Bhavana Sai  <bhavanab1506@gmail.com>
 * @version  :   1.0
 * @since    :   29/01/2019

 **************************************************************************/


var utility = require("../utility/utility");
var read = require("readline-sync");
var num = read.question("Enter the number = ");
utility.findSquareRoot(num);
