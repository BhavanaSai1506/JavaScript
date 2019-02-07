/************************************************************************
 * Execution :   default node : cmd> node searchWord.js
 *              
 * Purpose   :   To use Arrays to sort the word list and then to perform the binary search.
 * 
 * @description
 * @file     :   searchWord.js
 * @overview :   Read in a list of words from File. Then prompt the user to enter a word to 
 *               search the list. The program reports if the search word is found in the list.
 *               Print the result if the word is found or not.
 * @author   :   Bhavana Sai  <bhavanab1506@gmail.com>
 * @version  :   1.0
 * @since    :   29/01/2019

 **************************************************************************/


var utility=require('../utility/utility');
var read=require('readline-sync')
utility.searchWord();