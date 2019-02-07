/************************************************************************
 * Execution :   default node : cmd> node mergeSort.js
 *              
 * Purpose   :   To get merge Sort of list of Strings. 
 * 
 * @description
 * @file     :   mergeSort.js
 * @overview :  To Merge Sort an array, we divide it into two halves, sort the two halves
 *              independently, and then merge the results to sort the full array.
 * @author   :   Bhavana Sai  <bhavanab1506@gmail.com>
 * @version  :   1.0
 * @since    :   29/01/2019

 **************************************************************************/


var utility = require('../utility/utility');
var read = require('readline-sync');
var num = read.questionInt("enter the size of array : ")
var arr = [];
while (num != arr.length) {
    var number = read.questionInt("enter the array elements : ")
    arr.push(number)
}
var l = 0;
var h = arr.length;
function Merge() {

    utility.mergeSort(arr)
    console.log("Merge sorted result = ", arr);
}
Merge();
