/***********************************************************
 *
 * Execution      :Default node    cmd>node weekDaysStack.js
 * Purpose        :Week Object in a stack to display the Calendar.

 *@description 
 *@file          :weekDaysStack.js
 *@overview      :Week Object having a list of WeekDay objects each storing the day (i.e S,M,T,W,Th,..) and the Date (1,2,3..) .
                  The WeekDay objects are stored in a stack implemented using Linked List.
 *@author        :Bhavana Sai B<bhavanab1506@gmail.com>
 *@version       :1.0
 *@since         :05/02/2019
 * 
 ***********************************************************/
var utility = require('../utility/utilityCalender')
var D = require('../utility/utilityDataStructure')
var M = require('../utility/utility');
var T = require('util')
var read = require('readline-sync')
function call() {
    try {
        var weekdays = new D.StackLinkedList
        var stack1 = new D.StackLinkedList
        var dateq = new D.StackLinkedList
        var stack2 = new D.StackLinkedList
        var month = read.questionInt("enter the month :")
        var year = read.questionInt("enter the year :")
        var d = utility.day(month, 1, year)
        console.log(d)
        var res = ["Sun", "Mon", "Tue", "Wen", "Thu", "Fri", "sat"];
        if (d <= res.length) {
            console.log("The day falls on :" + res[d])
        }
        var days = utility.monthof(month)
        var t1 = utility.monthof(year)
        if (t1) {
            if (month == 2) {
                days = 29;
            }
        }
        for (let i = 0; i < res.length; i++) {
            weekdays.push(res[i])
        }
        for (let i = 1; i <= days; i++) {
            dateq.push(i)
        }
        for (let i = 0; i < res.length; i++) {
            stack1.push(weekdays.pop())
        }
        for (let i = 1; i <= days; i++) {

            stack2.push(dateq.pop())
        }
        for (let i = 0; i < res.length; i++) {
            T.print(stack1.pop() + "  ")
        }
        console.log()
        for (let i = 0; i < (d * 5); i++) {
            T.print(" ")
        }
        for (let i = 1; i <= days; i++) {

            if (i < 10) {
                T.print(" " + stack2.pop() + "   ")
            }
            if (i > 9) {
                T.print("" + stack2.pop() + "   ")
            }
            if ((d + i) % 7 == 0) {
                console.log();
            }
        }
    }
    catch (err) {
        console.log(err.message);
    }
} call();

	
	
	
