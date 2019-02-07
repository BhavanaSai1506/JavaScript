/************************************************************************
 * Execution :   default node : cmd> node bubbleSort.js
 *              
 * Purpose   :   To print the sorted list.
 * 
 * @description
 * @file     :   bubbleSort.js
 * @overview :   Reads in integers prints them in sorted order using Bubble Sort.
 * @author   :   Bhavana Sai  <bhavanab1506@gmail.com>
 * @version  :   1.0
 * @since    :   27/01/2019

 **************************************************************************/


var utility = require("../utility/utility");
var read = require("readline-sync");
var size = read.question("Enter the size of an array = ");
utility.getBubbleSort(size);
