/************************************************************************
 * Execution :   default node : cmd> node unOrderedList.js
 *              
 * Purpose   :   To read from file the list of Words and take user input to search a Text.
 * 
 * @description
 * @file     :   unOrderedList.js
 * @overview :   Read the Text from a file, split it into words and arrange it as Linked List.
 *               Take a user input to search a Word in the List. If the Word is not found then 
 *               add it to the list, and if it found then remove the word from the List. In the
 *               end save the list into a file.
 * @author   :   Bhavana Sai B <bhavanab1506@gmail.com>
 * @version  :   1.0
 * @since    :   30/01/2019

 **************************************************************************/


var util = require('../utility/utilityDataStructure');
var access = require('../utility/utility');
var read = require('readline-sync');
var word = read.question("enter word to be searched in file:");
var arr = access.fileRead();
var l = new util.LinkedList;
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    l.add(arr[i]);
}
var b = l.contain(word);
console.log(b);
if (b == true) {
    l.remove(word);
    var output = l.print();
    access.fileWrite('sample.txt', output);
    console.log(output);
}
else {
    l.add(word);
    var output = l.print();
    access.fileWrite('sample.txt', output);
    console.log(output);
}