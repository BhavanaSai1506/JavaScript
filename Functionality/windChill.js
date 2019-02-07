/**********************************************************************************************
 * Execution :   default node : cmd> node windChill.js
 *              
 * Purpose   :   To calculate the windChill by National weather service formule.
 * 
 * @description
 * @file     :   windChill.js
 * @overview :   Given the temperature t (in Fahrenheit) and the wind speed v (in miles per hour), 
 *               the National Weather Service defines the effective temperature (the wind chill),
 *               the formula is not valid if t is larger than 50 in absolute value or if v is larger
 *               than 120 or less than 3 (you may assume that the values you get are in that range).
 * @author   :   Bhavana Sai  <bhavanab1506@gmail.com>
 * @version  :   1.0
 * @since    :   25/01/2019

 ****************************************************************************************************/

var utility = require("../utility/utility");
var read = require("readline-sync");
utility.findWindChill();
