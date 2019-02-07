/*************************************************************************S*********************
 * Execution :   default node : cmd> node checkLeapYear.js
 *              
 * Purpose   :   To find weather the give year is a leap year or not.
 * 
 * @description
 * @file     :   chechLeapYear.js
 * @overview :   It takes the user input and prints weather the given year is a leap year or not.
 * @author   :   Bhavana Sai  <bhavanab1506@gmail.com>
 * @version  :   1.0
 * @since    :   24/01/2019

 **************************************************************************************************/


var utility = require("../utility/utility");
var read = require("readline-sync");
var year = read.question("Enter the year to be checked: ");
utility.checkLeapYear(year); 