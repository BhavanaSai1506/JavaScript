/******************************************************************************
 *  Execution       : default node          : cmd> node stock.js
 *                      
 *  Purpose         : To print the Modified Message.
 * 
 *  @description    
 *  @file           : stock.js
 *  @overview       : To read in the following message: Hello <<name>>, We have your full name as 
 *                    <<full name>> in our system. your contact number is 91-xxxxxxxxxx. Please,let 
 *                    us know in case of any clarification Thank you BridgeLabz 01/01/2016. Use Regex 
 *                    to replace name, full name, Mobile#, and Date with proper value.
 *  @author         : Bhavana Sai B <bhavanab1506@gmail.com@gmail.com>
 *  @version        : 1.0
 *  @since          : 07/02/2019
 *
 ******************************************************************************/

var fileStream = require('fs')
var string = fileStream.readFileSync('oops.txt', 'utf8')
var  utility= require('../Oops/oopsUtility')
var read = require('readline-sync')
var name = read.question('enter name you want to replace')
while (!isNaN(name))
{
    console.log('enter valid name')
    name = read.question('enter name to u want to replace')
}
var fullName = read.question('enter fullname')
while (!isNaN(fullName))
{
    console.log('enter valid fullName')
    fullName = read.question('enter your fullname')
}
var num = read.questionInt('enter phone number')
while (isNaN(num) && num.length!=09)
{
    console.log('enter valid number')
    name = read.question('enter your phone number')
}
var date = new Date();
var day=date.toDateString();
var ans = utility.replaceUsingRegex(name, fullName, num, day, string);
console.log(ans);

