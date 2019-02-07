/************************************************************************
 * Execution :   default node : cmd> node monthlyPayment.js
 *              
 * Purpose   :  To calculate thye monthly payment.
 * 
 * @description
 * @file     :   monthlyPayment.js
 * @overview :   It reads in three command-line arguments P, Y, and R and calculates the monthly 
 *               payments you would have to make over Y years to pay off a P principal loan amount
 *               at R per cent interest compounded monthly
 * @author   :   Bhavana Sai  <bhavanab1506@gmail.com>
 * @version  :   1.0
 * @since    :   28/01/2019

 **************************************************************************/


var utility = require("../utility/utility");
var read = require("readline-sync");
utility.findMonthlyPayment();
