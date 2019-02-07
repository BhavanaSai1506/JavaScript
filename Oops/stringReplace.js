const fileStream = require('fs')
const string = fileStream.readFileSync('oops.txt', 'utf8')
const utilOops = require('../Oops/oopsUtility')
const read = require('readline-sync')

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
var ans = utilOops.replaceUsingRegex(name, fullName, num, day, string);
console.log(ans);

