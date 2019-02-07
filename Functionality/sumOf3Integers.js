/*************************************************************************************
 * Execution :   default node : cmd> node sumOf3Integers.js
 *              
 * Purpose   :   To find distinct triples (i, j, k) such that a[i] + a[j] + a[k] = 0.
 * 
 * @description
 * @file     :   sumOf3Integers.js
 * @overview :   A program with cubic running time. Read in N integers and counts the  
 *               number of triples that sum to exactly 0 and print the distinct triplets.
 * @author   :   Bhavana Sai  <bhavanab1506@gmail.com>
 * @version  :   1.0
 * @since    :   25/01/2019

 ******************************************************************************************/


var utility = require("../utility/utility");
var read = require("readline-sync");
var size = read.question("Enter the size of an array ");
utility.findSumOf3Integers(size);
