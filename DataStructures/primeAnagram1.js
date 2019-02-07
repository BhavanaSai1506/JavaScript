/***********************************************************
 *
 * Execution      :Default node    cmd>node primeAnagram1.js
 * Purpose        :Prime Numbers that are Anagram in the Range of 0 - 1000 and print from the queue. 
 *@description 
 *@file          :primeAnagram1.js
 *@overview      :Prime Numbers that are Anagram in the Range of 0 - 1000
                  Queue using the Linked List and Print the Anagrams from the Queue.
 *@author        :Bhavana Sai B <bhavanab1506@gmail.com>
 *@version       :1.0
 *@since         :04/02/2019 
 ***********************************************************/
var utility = require('../utility/utilityDataStructure');
var M = require('../utility/utility')
var readline = require('readline-sync');
var arr = [];
var Q = new utility.LinledListQueue;
for (let i = 0; i < 1000; i++) {
    if (M.isPrime(i))
        arr.push(i)
}
for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (M.isAnagram(arr[i], arr[j])) {
            Q.enQueue(Number(arr[i]))
            Q.enQueue(Number(arr[j]))
        }
    }
}
console.log(" Anagrams are :" + Q.printList());
