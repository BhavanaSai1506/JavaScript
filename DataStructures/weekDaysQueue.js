/***********************************************************
 *
 * Execution      :Default node    cmd>node weekDaysQueue.js
 * Purpose        :Week Object in a Queue to display the Calendar.

 *@description 
 *@file          :weekDaysQueue.js
 *@overview      :Week Object having a list of WeekDay objects each storing the day (i.e S,M,T,W,Th,..) and the Date (1,2,3..) .
                  The WeekDay objects are stored in a Queue implemented using Linked List.
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
        var weekdays=new D.LinledListQueue
        var dateq = new D.LinledListQueue
        var month = read.questionInt("enter the month :")
        var year = read.questionInt("enter the year :")
        var d = utility.day(month,1, year)
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
            weekdays.enQueue(res[i])
        }
        for (let i = 1; i <= days; i++) {

            dateq.enQueue(i)
        }
        for (let i = 0; i < res.length; i++) {
            T.print(weekdays.deQueue() + "  ")
        }
        console.log()
        for (let i = 0; i < (d * 5); i++) {
            T.print(" ")
        }
        for (let i = 1; i <= days; i++) {

            if (i < 10) {
                T.print(" " + dateq.deQueue() + "   ")
            }
            if (i > 9) {
                T.print("" + dateq.deQueue() + "   ")
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

	
	
	
