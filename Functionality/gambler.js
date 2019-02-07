/***************************************************************************
 * Execution :   default node : cmd> node gambler.js
 *              
 * Purpose   :   To print number of wins and percentage of wins and loss.
 * 
 * @description
 * @file     :   gambler.js
 * @overview :   gambler takes the stake and goal inputs from the user and
 *               prints Number of Wins and Percentage of Win and Loss.
 * @author   :   Bhavana Sai  <bhavanab1506@gmail.com>
 * @version  :   1.0
 * @since    :   24/01/2019

 ******************************************************************************/

var utility = require("../utility/utility");
var read = require("readline-sync");
var stake = read.question("Enter the inital amount = ");
var goal = read.question("Enter4 the goal amount to be achieved = ")
var times = read.question("Enter the number of times he/she bet = ")
utility.playGambler(stake, goal, times);
