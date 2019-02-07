/************************************************************************
 * Execution :   default node : cmd> node stopWatch.js
 *              
 * Purpose   :   To measure the elapsed time between start and end.

 * 
 * @description
 * @file     :   stopWatch.js
 * @overview :   A Stopwatch Program for measuring the time that elapses 
 *               between the start and end clicks then print the value.
 * @author   :   Bhavana Sai  <bhavanab1506@gmail.com>
 * @version  :   1.0
 * @since    :   27/01/2019

 **************************************************************************/


var utility = require("../utility/utility");
var read = require("readline-sync");
utility.getTime(read);
