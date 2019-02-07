/************************************************************************
 * Execution :   default node : cmd> node bankingCashCounter.js
 *              
 * Purpose   :   To  Write a Queue Class to enqueue and dequeue people to either deposit or withdraw 
 *               money and maintain the cash balance
 * 
 * @description
 * @file     :   bankingCashCounter.js
 * @overview :   Create a Program which creates Banking Cash Counter where people come in to deposit Cash
 *               and withdraw Cash. Have an input panel to add people to Queue to either deposit or withdraw 
 *               money and dequeue the people. Maintain the Cash Balance.
 * @author   :   Bhavana Sai B <bhavanab1506@gmail.com>
 * @version  :   1.0
 * @since    :   01/02/2019

 **************************************************************************/


var util = require('../utility/utilityDataStructure');
var access = require('../utility/utility');
var read = require('readline-sync');
function Queue() {
    var L = new util.Queue;
    var bankAmount = 4000;
    var set = [];
    var flag = true;
    var count = 0;
    var size = read.question("Enter the total number of people to be in queue = ");
    if (size > 0) {
        for (let i = 1; i <= size; i++) {
            var input = read.question("Enter 1 deposit amount \n Enter 2 to withdraw amount")
            if (input == 1) {
                var amount = read.questionFloat("Enter the total amount to deposit = ")
                var set = L.enqueue(Number(amount));
                flag = true;
            }
            else if (input == 2) {
                var amount = read.questionInt("Enter the total amount to be withdraw = ")
                var get = L.enqueue(Number(-amount))
                flag = true;
            }
            else {
                console.log("Make sure that you have entered correct key ");
                flag = false;
                return;
            }
        }
    }
    else {
        console.log("Invalid input");
        return;
    }
    if (flag) {
        var add = 0;
        for (let i = 1; i < size; i++) {
            add = add + L.deEqueue();
        }
        //console.log(add);
        var totalAmount = bankAmount + add;
        if(add>0)
        {
            console.log("Total amount left in bank is:" + totalAmount);
        }
        else{
            console.log("insufficient balance");
            
        }
        if (totalAmount < bankAmount) {
            console.log("Minimum cash is not maintained in bank = ");
        }
        else {
            console.log("Minimum cash is maintained in bank");
        }
    }
}
Queue();