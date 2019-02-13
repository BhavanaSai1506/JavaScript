/******************************************************************************
 *  Execution       :   default node          : cmd> node addressBook.js
 *                      
 *  Purpose         : To print the 
 * 
 *  @description    
 *  @file           : addressBook.js
 *  @overview       : To create a JSON file having Inventory Details for Rice, Pulses and Wheats with properties
 *                    name, weight, price per kg. Get JSON Object in Java or NSDictionary in iOS. Create Inventory 
 *                    Object from JSON. Calculate the value for every Inventory. 
 *  @author         : Bhavana Sai B <bhavanab1506@gmail.com@gmail.com>
 *  @version        : 1.0
 *  @since          : 07/02/2019
 *
 ******************************************************************************/

var read = require('readline-sync')
var utility=require('../Oops/oopsUtility')
var fs = require('fs');
var data = fs.readFileSync('address.json','utf8');
var addressb = JSON.parse(data);
function addressBook() {
    var a = new utility.Address;
    console.log("*****ADDRESS BOOK*****");
    console.log("1:Create Profile");
    console.log("2:Open Address Book");
    console.log("3:Exit");
    var choice1 = read.question(" Enter your choice: ");
    switch (parseInt(choice1)) {
        case 1:
            a.createAddress(addressb);
            break;
        case 2:
            a.openProfile(addressb);
            break;
        case 3:
            console.log("ThankYou!");
            break;
        default:
            console.log("Please enter a valid option!!");
    }
}
addressBook();


