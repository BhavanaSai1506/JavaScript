const fileStream = require('fs');
const read = fileStream.readFileSync('inventory.json');
const utility = require('../Oops/oopsUtility');
var object = JSON.parse(read);
function inventory() {
    utility.inventory(object);
}
inventory();