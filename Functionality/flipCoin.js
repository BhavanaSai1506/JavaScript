/**************************************************************************
 * Execution :   default node : cmd> node flipCoin.js
 *              
 * Purpose   :   FlipCoin and print the percentage of heads and tails.
 * 
 * @description
 * @file     :   flipCoin.js
 * @overview :   flip a coin n number of times, generate a random number
 *               and print percentage of heads and tails.
 * @author   :   Bhavana Sai  <bhavanab1506@gmail.com>
 * @version  :   1.0
 * @since    :   24/01/2019

 *****************************************************************************/


var utility = require("../utility/utility");
var read = require("readline-sync");
var flip = read.question("Enter the number of flips: ");
utility.flipCoin(flip);


