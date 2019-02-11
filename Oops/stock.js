/******************************************************************************
 *  Execution       :   default node          : cmd> node stock.js
 *                      
 *  Purpose         : To Print the Stock Report.
 * 
 *  @description    
 *  @file           : stock.js
 *  @overview       : program to read in Stock Names, Number of Share, Share Price. Print a Stock
 *                    Report with total value of each Stock and the total value of Stock.
 *  @author         : Bhavana Sai B <bhavanab1506@gmail.com@gmail.com>
 *  @version        : 1.0
 *  @since          : 08/02/2019
 *
 ******************************************************************************/

const utility = require('../Oops/oopsUtility')//calling util function
const fileStream = require('fs')
const json = fileStream.readFileSync('stock.json')
var object = JSON.parse(json)//parsing the json file
var stock = new utility.Stock(name, share, price);
for (let key in object.Stock) 
{
    var name = object.Stock[key].name
    var share = object.Stock[key].share;
    var price = object.Stock[key].price
    console.log("The total value of "+object.Stock[key].name+" is "+stock.addValue(share,price));
}