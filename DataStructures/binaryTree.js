/************************************************************************
 * Execution :   default node : cmd> node binaryTree.js
 *              
 * Purpose   :   To find the number of binary search tree.
 * 
 * @description
 * @file     :   binaryTree.js
 * @overview :   To accept the number from the user and find the binary tree by using the formula
 *               factorial=(2n)!/(n+1)n!.
 * @author   :   Bhavana Sai B <bhavanab1506@gmail.com>
 * @version  :   1.0
 * @since    :   02/02/2019

 **************************************************************************/

var util = require('../utility/utilityDataStructure');
var read = require('readline-sync');
var number = read.questionFloat("Enter the number :")
var factorial = util.getBinaryTree(number)
var factorial1 = util.getBinaryTree(number * 2);
var factorial2 = util.getBinaryTree(number + 1)
var output = (factorial1) / (factorial2 * factorial)
console.log(output);




