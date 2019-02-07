/************************************************************************
 * Execution :   default node : cmd> node palindromeChecker.js
 *              
 * Purpose   :   The solution to this problem will use a deque to store the characters of the string.
 *               We will process the string from left to right and add each character to the rear of the deque. 
 * 
 * @description
 * @file     :   palindromeChecker.js
 * @overview :   A palindrome is a string that reads the same forward and backward, We would like to construct 
 *               an algorithm to input a string of characters and check whether it is a palindrome.

 * @author   :   Bhavana Sai B  <bhavanab1506@gmail.com>
 * @version  :   1.0
 * @since    :   2/02/2019

 **************************************************************************/

var util = require('../utility/utilityDataStructure');
var access = require('../utility/utility');
var read = require('readline-sync');
function check() {
    var d = new util.Dequeue;
    var word = read.question("Enter the string = ");
    var result = d.palindromeChecker(word);
    if (result == false) {
        console.log("String is not a palindrome");
    }
    else {
        console.log("String is Palindrome");
    }
}
check();