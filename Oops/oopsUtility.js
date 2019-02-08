

var read = require('readline-sync')
var file = require('fs')
class Stock 
    {
    constructor(name, share, price)
    {
        this.name = name;
        this.share = share;
        this.price = price;
    }
    addValue(share, price)
    {
        var sum = price * share
        return sum;
    }
}

class Rice{
    constructor(name,weight,price)
    {
        this.name=name;
        this.weight=weight;
        this.price=price;
    }
    totalValue(){
        return this.weight*this.price;
    }
}

class Wheat{
    constructor(name,weight,price)
    {
        this.name=name;
        this.weight=weight;
        this.price=price;
    }
    totalValue(){
        return this.weight*this.price;
    }
}

class Pulses{
    constructor(name,weight,price)
    {
        this.name=name;
        this.weight=weight;
        this.price=price;
    }
    totalValue(){
        return this.weight*this.price;
    }
}

class inventoryManager {

    constructor() {

    }
    add(data) {
        var name = read.question("Enter the name of the stock to add :");
        var shares = read.questionInt("Enter number of shares :");
        var quantity = read.questionInt("Enter the price of the shares :");
        data.Stock.push(
            {
                shareName: name,
                noOfshares: shares,
                price: quantity
            })
        var d = file.writeFileSync('inventoryManage.json', JSON.stringify(data))
    }

    remove(data) {
        var name = read.question("Enter the name of the stock want to remove :")
        for (let i = 0; i < data.Stock.length; i++) {
            
            if (data.Stock[i].shareName == name) {
                var index = data.Stock.indexOf(data.Stock[i])
                data.Stock.splice(index, 1)
            }
            var d = file.writeFileSync('inventoryManage.json', JSON.stringify(data))
        }
    }

    print(data) {
        var stock = data.Stock;
        for (const key in stock) {
            console.log(stock[key]);

        }
    }
    edit(data) {
        var stock = data.Stock;
        var name = read.question("Enter the stock name to edit :")
        var sharess = read.question("Enter noofShares to edit : ")
        var money = read.question("Enter the shares price :")
        for (let key in stock) {
            if (stock[key].shareName == name)
                var value = key;
            if (stock[key].noOfshares == sharess)
                var value1 = key;
            if (stock[key].price == money)
                var value2 = key;
        }
        var name1 = read.question("Enter the new name of the share :");
        stock[value].shareName = name1;
        var name2 = read.question("Enter the new noofShares :");
        stock[value1].noOfshares = name2;
        var name3 = read.question("Enter  the new price of the shares :")
        stock[value2].noOfshares = name3;
        var d = file.writeFileSync('inventoryManager.json', JSON.stringify(data))
    }
}





module.exports = {Stock,Rice,Wheat,Pulses,inventoryManager,
   

    replaceUsingRegex(name, fullName, num, day, fileString) {
        fileString = fileString.replace(/<<name>>/g, name)
        fileString = fileString.replace(/<<full name>>/g, fullName)
        fileString = fileString.replace(/91-xxxxxxxxxx/g, num)
        fileString = fileString.replace(/01-01-2016/g, day);
        return fileString;
    },
}