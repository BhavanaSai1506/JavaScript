/******************************************************************************
 *  Execution       :   default node          : cmd> node inventoryManager.js
 *                      
 *  Purpose         : To create the JSON from Inventory Object and output the JSON String.
 * 
 *  @description    
 *  @file           : inventoryManager.js
 *  @overview       : The Inventory Manager will use InventoryFactory to create Inventory Object from JSON.
 *                    The InventoryManager will call each Inventory Object in its list to calculate the 
 *                    Inventory Price and then call the Inventory Object to return the JSON String.
 *                    The main program will be with InventoryManager.
 *  @author         : Bhavana Sai B <bhavanab1506@gmail.com@gmail.com>
 *  @version        : 1.0
 *  @since          : 08/02/2019
 *
 ******************************************************************************/

var utility = require('../Oops/oopsUtility');
var read = require('readline-sync');
var fileRead = require('fs');
var data = fileRead.readFileSync('inventoryManager.json', 'utf8');
function inventoryManager() {
    try {
        var data1 = JSON.parse(data);
        var object = new utility.inventoryManager;
        here: while (ch != 5) {
            console.log("Press 1 to add :");
            console.log("Press 2 to remove :");
            console.log("Press 3 to edit :");
            console.log("Press 4 to print:");
            console.log("Press 5 to exit :");
            var ch = read.questionInt("Enter the number :")
            switch (ch) {
                case 1:
                    object.add(data1)
                    break;
                case 2:
                    object.remove(data1)
                    break;
                case 3:
                    object.edit(data1)
                    break;
                case 4:
                    object.print(data1)
                    break;
                case 5:
                    break;
                default:
                    console.log("Please enter the correct number ");
                    break here;
            }
        }
    }
    catch (err) {
        console.log(err.message);
    }
} inventoryManager();


  /************************* Inventory Management Program ***************************
   *  Inventory Management Program
   *---------------------------------
   * @Purpose   : To creat a file having Inventory Details for Rice, Pulses and Wheats
   *             with properties such as name, weight, price per kg.
   *
   * @Use Library : Java JSON Library
   *
   * @description: Declaring the function and passing the userinput as argument.
   *
   * @function: diplayname takes the userinput and print it with some sentence.
   *
   * @param : object --> objects such as Rice, Wheats and Pulse which are at inventory
   */
