/************************************************************************
 * Execution :   default node : cmd> node anagram.js
 *              
 * Purpose   :   To Take 2 Strings as Input such abcd and dcba and Check for Anagrams.
 * 
 * @description
 * @file     :   anagram.js
 * @overview :   One string is an anagram of another if the second is simply a rearrangement
 *               of the first. 
 * @author   :   Bhavana Sai  <bhavanab1506@gmail.com>
 * @version  :   1.0
 * @since    :   27/01/2019

 **************************************************************************/


var utility = require("../utility/utility");
var read = require("readline-sync");
var s1 = read.question("Enter the first string = ");
var s2 = read.question("Enter the second string = ");
var result = utility.isAnagram(s1, s2);
console.log(result);
