/************************************************************************
 * Execution :   default node : cmd> node dayOfWeek.js
 *              
 * Purpose   :  Function that takes a date as input and prints the day of the week.
 * 
 * @description
 * @file     :   dayOfWeek.js
 * @overview :   program that takes three command-line arguments: m (month), d (day), and y (year),
 *               and print the day of the week, using Gregorian calendar formulars.
 * @author   :   Bhavana Sai  <bhavanab1506@gmail.com>
 * @version  :   1.0
 * @since    :   29/01/2019

 **************************************************************************/


var utility = require("../utility/utility");
var read = require("readline-sync");
var day = Number(process.argv[2]);
var month = Number(process.argv[3]);
var year = Number(process.argv[4]);
var result = utility.findDayOfWeek(day, month, year);
console.log("The result is = " + result);
