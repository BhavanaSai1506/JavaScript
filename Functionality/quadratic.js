/********************************************************************************************
 * Execution :   default node : cmd> node quadratic.js
 *              
 * Purpose   :   to find the roots of the equation a*x*x + b*x + c.
 * 
 * @description
 * @file     :   quadratic.js
 * @overview :   The roots of the equation can be found using a formula, delta = b*b - 4*a*c,
 *               Root 1 of x = (-b + sqrt(delta))/(2*a), Root 2 of x = (-b - sqrt(delta))/(2*a)
 *               and print the roots.
 * @author   :   Bhavana Sai  <bhavanab1506@gmail.com>
 * @version  :   1.0
 * @since    :   25/01/2019

 *************************************************************************************************/


var utility = require("../utility/utility");
var read = require("readline-sync");
var a = read.question("Enter the value of a: ");
var b = read.question("Enter the value of b: ");
var c = read.question("Enter the value of c: ");
utility.isQuadratic(a, b, c);
