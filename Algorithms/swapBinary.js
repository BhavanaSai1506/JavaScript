/************************************************************************
 * Execution :   default node : cmd> node swapBinary.js
 *              
 * Purpose   :   To read an integer as an Input, convert to Binary using toBinary function.
 * 
 * @description
 * @file     :   swapBinary.js
 * @overview :   A nibble is a four-bit aggregation, or half an octet. There are two nibbles in a byte.
 *               Given a byte, swap the two nibbles in it. For example 100 is to be represented as 
 *               01100100 in a byte (or 8 bits). The two nibbles are (0110) and (0100). If we swap the
 *               two nibbles, we get 01000110 which is 70 in decimal.
 * @author   :   Bhavana Sai  <bhavanab1506@gmail.com>
 * @version  :   1.0
 * @since    :   29/01/2019

 **************************************************************************/


var D=require('../utility/utility');
var read=require('readline-sync');
var num=read.questionInt("enter number :")
D.swapBinary(num)