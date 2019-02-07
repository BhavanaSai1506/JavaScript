/************************************************************************
 * Execution :   default node : cmd> node binaryNumber.js
 *              
 * Purpose   :   To print the binary number to the given number.
 * 
 * @description
 * @file     :   binaryNumber.js
 * @overview :   The function toBinary that outputs the binary (base 2) representation 
 *               of the decimal number typed as the input. It is based on decomposing the 
 *               number into a sum of powers of 2.
 * @author   :   Bhavana Sai  <bhavanab1506@gmail.com>
 * @version  :   1.0
 * @since    :   29/01/2019

 **************************************************************************/


var utility = require('../utility/utility');
var read = require('readline-sync')
var num = read.question("Enter the number = ");
utility.toBinary(num);