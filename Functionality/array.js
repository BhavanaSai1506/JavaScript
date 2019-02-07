/************************************************************************
 * Execution :   default node : cmd> node array.js
 *              
 * Purpose   :  To create 2 dimensional array in memory to read in M rows and N cols. 
 * 
 * @description
 * @file     :   array.js
 * @overview :   A library for reading in 2D arrays of integers, doubles, or booleans 
 *               from standard input and printing them out to standard output.
 * @author   :   Bhavana Sai  <bhavanab1506@gmail.com>
 * @version  :   1.0
 * @since    :   25/01/2019

 **************************************************************************/


var utility = require("../utilyty/utilyty");
var read = require("readline-sync");
var row = read.question("Enter the row = ");
var column = read.question("Enter the column = ");
utilyty.getArray(row, column, read);
