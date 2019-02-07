/************************************************************************
 * Execution :   default node : cmd> node calender.js
 *              
 * Purpose   :   To prints the Calendar of the month.
 * 
 * @description
 * @file     :   calender.js
 * @overview :   program that takes the month and year as command-line arguments and prints the Calendar 
 *               of the month.Store the Calendar in an 2D Array,the first dimension the week of the month 
 *               and the second dimension stores the day of the week. Print the result. 

 * @author   :   Bhavana Sai B <bhavanab1506@gmail.com>
 * @version  :   1.0
 * @since    :   02/02/2019

 **************************************************************************/


var utility = require('../utility/utilityCalender')
var access = require('../utility/utility');
const T = require('util')
function call() {
    try {
        var month = process.argv[2];
        var year = process.argv[3];
        var week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        var dates = [0, 31, 28, 31, 30, 31, 31, 30, 31, 30, 31, 30, 31];
        var day = utility.day(month, 1, year);
        var leap = utility.leapYear(year);
        console.log(" month--> " + month + " year--> " + year);
        console.log();
        if (leap == true) {
            dates[2] = 29;
        }
        for (var i = 0; i < week.length; i++) {
            T.print(week[i] + "  ");
        }
        console.log();
        for (var i = 0; i < (day * 5); i++) {
            T.print(" ");
        }
        for (var i = 1; i <= dates[month]; i++) {
            if (i < 10) {
                T.print(" " + i + "   ");
            }
            if (i > 9) {
                T.print("" + i + "   ")
            }
            if ((i + day) % 7 == 0) {
                console.log();
            }
        }
        console.log("\n\n");
    } catch (err) {
        console.log(err.message);
    }
} call();