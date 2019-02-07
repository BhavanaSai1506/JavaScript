/************************************************************************
 * Execution :   default node : cmd> node venderMachine.js
 *              
 * Purpose   :   To calculate the minimum number of Notes as well as the 
 *               Notes to be returned by the Vending Machine as a Change.
 * 
 * @description
 * @file     :   venderMachine.js
 * @overview :   There is 1, 2, 5, 10, 50, 100, 500 and 2000 Rs Notes which can be 
 *               returned by Vending Machine and print the number of notes. 
 * @author   :   Bhavana Sai  <bhavanab1506@gmail.com>
 * @version  :   1.0
 * @since    :   29/01/2019

 **************************************************************************/


var utility=require('../utility/utility');
var read=require('readline-sync')
var amount=read.questionInt("enter amount :")
var arr=[2000,500,200,100,50,10,5,2,1]
utility.findNumberOfNotes(arr,amount)