/************************************************************************
 * Execution :   default node : cmd> node balancedParentheses.js
 *              
 * Purpose   :   To read in Arithmetic Expression and print True or False to Show
 *               Arithmetic Expression is balanced or not.
 * 
 * @description
 * @file     :   balancedParentheses.js
 * @overview :   Take an Arithmetic Expression where parentheses are used to order the performance
 *               of operations. Ensure parentheses must appear in a balanced fashion.
 * @author   :   Bhavana Sai B  <bhavanab1506@gmail.com>
 * @version  :   1.0
 * @since    :   01/02/2019

 **************************************************************************/

var read = require('readline-sync');
var util = require('../utility/utilityDataStructure');
function Stack() {
    var stack = new util.Stack;
    var str = read.question("Enter the mathematical expression with parantheses : ");
    var ch;

    for (let i = 0; i < str.length; i++) {
        ch = str.charAt(i);
        if (ch == '(' || ch == '{' || ch == '[') {
            stack.push(ch);
        }
        else {
            switch (ch) {
                case ')': if (stack.pop() != '(') {
                    return false;
                }
                    break;
                case '}': if (stack.pop() != '{') {
                    return false;
                }
                    break;
                case ']': if (stack.pop() != '[') {
                    return false;
                }
                    break;
            }
        }
    }
    if (stack.size == 0) {
        return true;
    }
    return false;
}
var result = Stack();
console.log(result);
if (result) {
    console.log("Expression is balanced");
}
else {
    console.log("Expression is not balanced");
}




