/******************************************************************************
 * Execution :   default node : cmd> node harmonicNumber.js
 *              
 * Purpose   :   To print the harmonic number. 
 * 
 * @description
 * @file     :   harmonicNumber.js
 * @overview :   It takes the user input and prints the Nth harmonic value.
 * @author   :   Bhavana Sai  <bhavanab1506@gmail.com>
 * @version  :   1.0
 * @since    :   24/01/2019

 ********************************************************************************/



var utility = require("../utility/utility");
var read = require("readline-sync");
var harmNum = read.question("Enter the number: ");
utility.isHarmonic(harmNum);

