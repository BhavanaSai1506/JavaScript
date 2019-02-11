var prompt = require('readline-sync')
var access=require('../Oops/oopsUtility')
var fs = require('fs');
var data = fs.readFileSync('address.json','utf8');
var addressb = JSON.parse(data);
function addressBook() {
    var a = new access.Address;
    console.log("*****ADDRESS BOOK*****");
    console.log("1:Create Profile");
    console.log("2:Open Address Book");
    console.log("3:Exit");
    var choice1 = prompt.question(" Enter your choice: ");
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


