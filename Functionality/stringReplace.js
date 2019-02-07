/************************************************************************
 * Execution :   default node : cmd> node stringReplace.js
 *              
 * Purpose   :   to print string by replacing username.
 * 
 * @description
 * @file     :   stringReplace.js
 * @overview :   Used to print string by replacing the given user input.
 * @author   :   Bhavana Sai  <bhavanab1506@gmail.com>
 * @version  :   1.0
 * @since    :   23/01/2019

 **************************************************************************/


var utility = require("../utility/utility");
var read = require("readline-sync");
var username = read.question("Enter the name: ");
utility.replaceString(username);

