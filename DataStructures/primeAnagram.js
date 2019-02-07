/***********************************************************
 *
 * Execution      :Default node    cmd>node primeAnagram.js
 * Purpose        :Prime Numbers that are Anagram in the Range of 0 - 1000 to print in reverse order. 
 *@description 
 *@file          :primeAnagram.js
 *@overview      :Prime Numbers that are Anagram in the Range of 0 - 1000
                  Stack using the Linked List and Print the Anagrams in the Reverse Order.
 *@author        :Bhavana Sai B <bhavanab1506@gmail.com>
 *@version       :1.0
 *@since         :04/02/2019
 ***********************************************************/
var utility = require('../utility/utilityDataStructure');
var M = require('../utility/utility')
var readline = require('readline-sync');
var arr = [];
var stack = new utility.StackLinkedList
for (let i = 1000; i >= 0; i--) {
    if (M.isPrime(i))
        arr.push(i)
}
for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (M.isAnagram(arr[i], arr[j])) {
            stack.push(Number(arr[i]))
            stack.push(Number(arr[j]))
        }
    }
}
var result = stack.print()
console.log(("Anagrams in reverse order :"));
console.log(result + "\n");
