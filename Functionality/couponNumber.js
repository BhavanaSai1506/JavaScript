/*********************************************************************************************
 * Execution :   default node : cmd> node couponNumber.js
 *              
 * Purpose   :   repeatedly choose a random number and check whether it's a new one.
 * 
 * @description
 * @file     :   couponNumber.js
 * @overview :   Given N distinct Coupon Numbers, need to generate distinct coupon number, 
 *               and print the value.
 * @author   :   Bhavana Sai  <bhavanab1506@gmail.com>
 * @version  :   1.0
 * @since    :   25/01/2019
 * *********************************************************************************************/



var utility = require("../utility/utility");
var read = require("readline-sync");
var num = read.question("Enter the number ");
utility.findCouponNumber(num);
