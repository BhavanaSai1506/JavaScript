/************************************************************************
 * Execution :   default node : cmd> node orderedList.js
 *              
 * Purpose   :   To read from file the list of Numbers and take user input for a new number.
 * 
 * @description
 * @file     :   orderedList.js
 * @overview :   Read a List of Numbers from a file and arrange it ascending Order in a Linked List.
 *               Take user input for a number, if found then pop the number out of the list else insert
 *               the number in appropriate position.
 * @author   :   Bhavana Sai B <bhavanab1506@gmail.com>
 * @version  :   1.0
 * @since    :   31/01/2019

 **************************************************************************/


var util = require('../utility/utilityDataStructure');
var access = require('../utility/utility');
var read = require('readline-sync');
var arr1 = access.fileRead();
var arr = [];
console.log("before sort: " + arr1);
for (let i = 0; i < arr1.length; i++) {
    arr[i] = parseInt(arr1[i]);
}
access.mergeSort(arr)
console.log("After sort: " + arr);
var L = new util.LinkedList;
var number = read.question("Enter the number to searched :");
try {
    for (let i = 0; i < arr.length; i++) {
        L.add(arr[i])
    }
    var found = L.contain(number)
    if (found == true) {
        L.remove(number)
        var output = L.print()
        access.fileWrite('sample1.txt', output)
        console.log(output);
    }
    else {
        console.log(arr);
        var pos = L.addPos(arr, number)
        console.log("position :" + pos);
        L.insertAt(number, pos)
        var out = L.print();
        access.fileWrite('sample1.txt', out)
        console.log(out);
    }
} catch (error) {
    console.log(error.message);
}