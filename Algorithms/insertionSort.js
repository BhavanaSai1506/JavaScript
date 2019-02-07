/************************************************************************
 * Execution :   default node : cmd> node insertionSort.js
 *              
 * Purpose   :  Use Insertion Sort to sort the words in the String array.
 * 
 * @description
 * @file     :   insertionSort.js
 * @overview :   Reads in strings from standard input and prints them in sorted order.
 *               Uses insertion sort.
 * @author   :   Bhavana Sai  <bhavanab1506@gmail.com>
 * @version  :   1.0
 * @since    :   28/01/2019

 **************************************************************************/


var utility = require("../utility/utility");
var read = require("readline-sync");
var size = read.question("Enter the size of an array = ");
utility.getInsertionSort(size);
