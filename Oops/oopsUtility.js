

var read = require('readline-sync')
var file = require('fs')

/***********************************************Stock************************************************
 * @purpose    : To Print the Stock Report.
 * @param      : To create the object in JSON and print the result.
 * @function   : program to read in Stock Names, Number of Share, Share Price. Print a Stock
 *               Report with total value of each Stock and the total value of Stock.
 ****************************************************************************************************/

class Stock {
    constructor(name, share, price) {
        this.name = name;
        this.share = share;
        this.price = price;
    }
    addValue(share, price) {
        var sum = price * share
        return sum;
    }
}

/*******************************************inventory***************************************************
 * @purpose    : To create the JSON from Inventory Object and output the JSON String.
 * @param      : To create the object in JSON and print the result.
 * @function   : To create a JSON file having Inventory Details for Rice, Pulses and Wheats with properties
 *               name, weight, price per kg. Get JSON Object in Java or NSDictionary in iOS. Create Inventory 
 *               Object from JSON. Calculate the value for every Inventory. 
 *******************************************************************************************************/

class Rice {
    constructor(name, weight, price) {
        this.name = name;
        this.weight = weight;
        this.price = price;
    }
    totalValue() {
        return this.weight * this.price;
    }
}

class Wheat {
    constructor(name, weight, price) {
        this.name = name;
        this.weight = weight;
        this.price = price;
    }
    totalValue() {
        return this.weight * this.price;
    }
}

class Pulses {
    constructor(name, weight, price) {
        this.name = name;
        this.weight = weight;
        this.price = price;
    }
    totalValue() {
        return this.weight * this.price;
    }
}

/*********************************************inventoryManager****************************************
 * @purpose    : To create the JSON from Inventory Object and output the JSON String.
 * @param      : To create the object in JSON and print the result.
 * @function   : The Inventory Manager will use InventoryFactory to create Inventory Object from JSON.
 *               The InventoryManager will call each Inventory Object in its list to calculate the 
 *               Inventory Price and then call the Inventory Object to return the JSON String.
 *               The main program will be with InventoryManager.
 ******************************************************************************************************/

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

/*class Person {
    constructor(fname, lname, city, st, zip, phnum) {
        this.firstname = fname,
            this.lastname = lname,
            this.city = city,
            this.state = st,
            this.zipcode = zip,
            this.phonenumber = phnum


    }
}


class AddressBook {
    constructor() { }
    address(data) {
        console.log("Enter 1 for add person information")
        console.log("Enter 2 for update person information")
        console.log("Enter 3 for remove person information")
        console.log("Enter 4 for sort the addressbook based on ZIP")
        console.log("Enter 5 for sort the addressbook based on firstname")
        console.log("Enter 6 for Print all addressbook information")
        var num = read.questionInt("Select  any number:")
        switch (num) {
            case 1: this.addPerson(data)
                break;
            case 2: this.updatePerson(data)
                break;
            case 3: this.removeperson(data)
                break;
            case 4: this.sortzip(data)
                break;
            case 5: this.sortfname(data)
                break;
            case 6: this.printadd(data)
                break;

        }

    }
    addPerson(data) {
        var fname = read.question("Enter firstname of person :")
        var lname = read.question("Enter lastname of person :")
        var city1 = read.question("Enter city of person:")
        var state1 = read.question("Enter state of person:")
        var phonenum1 = read.question("Enter phonenumber:")
        var zip = read.question("Enter zip code:")
        var o = new Person(fname, lname, city1, state1, zip, phonenum1)
        data.Person.push(
            {
                personfname: fname,
                personlname: lname,
                phonenumber: phonenum1,
                city: city1,
                state: state1
            }
        )

        var d = file.writeFileSync('s.json', JSON.stringify(data))
    }
    updatePerson(data) {
        var name = read.question("enter Firstname of person :")
        for (let i = 0; i < data.Person.length; i++) {
            if (data.Person[i].personfname == name) {
                var index = data.Person.indexOf(data.Person[i]);
                console.log(" select which information to be update ")
                console.log("Enter 1 for firstname of person to be update")
                console.log("Enter 2 for  lastname of person to be update")
                console.log("Enter 3 for  phonenumber person to be update")
                console.log("Enter 4 for  city of person to be update")
                console.log("Enter 5 for  state of person to be update")
                console.log("Enter 6 for  zip code of person to be update")
                var num1 = read.questionInt("select any number:")
                switch (num1) {
                    case 1: this.firstname(data, index)
                        break;
                    case 2: this.lastname(data, index)
                        break;
                    case 3: this.phonenumber(data, index)
                        break;
                    case 4: this.city(data, index)
                        break;
                    case 5: this.state(data, index)
                        break;
                    case 6: this.zipcode(data, index)
                        break;
                }
            }
        }
    }
    firstname(data, index) {
        var fname1 = read.question("enter the name changed first name:")
        data.Person[index].personfname = fname1
        var d = file.writeFileSync('AddressBook.json', JSON.stringify(data))

    }
    lastname(data, index) {
        var lname1 = read.question("enter changed last name:")
        data.Person[index].personlname = lname1
        var d = file.writeFileSync('AddressBook.json', JSON.stringify(data))

    }
    phonenumber(data, index) {
        var phonenumber1 = read.question("enter  changed phonenumber:")
        data.Person[index].phonenumber = phonenumber1
        var d = file.writeFileSync('AddressBook.json', JSON.stringify(data))

    }
    city(data, index) {
        var cityname = read.question("enter changed city name")
        data.Person[index].city = cityname
        var d = file.writeFileSync('AddressBook.json', JSON.stringify(data))

    }
    state(data, index) {
        var statename = read.question("enter the name changed first name")
        data.Person[index].state = statename
        var d = file.writeFileSync('AddressBook.json', JSON.stringify(data))

    }
    zipcode(data, index) {
        var zipcode = read.question("enter the name changed first name")
        data.Person[index].zip = zipcode
        var d = file.writeFileSync('AddressBook.json', JSON.stringify(data))

    }
    removeperson(data) {

        var name = read.question("enter name of person to be remove:")
        for (let i = 0; i < data.Person.length; i++) {
            if (data.Person[i].personfname == name) {
                var index = data.Person.indexOf(data.Person[i]);
                var dd = data.Person.splice(index, 1);
            }
            var d = file.writeFileSync('AddressBook.json', JSON.stringify(data))

        }

    }
    sortfname(data) {
        let fname = data.Person;
        function sortbyfname(a, b) {
            if (a.personfname == b.personfname);
            return 0
            if (a.personfname > b.personfname);
            return 1
            if (a.personfname < b.personfname);
            return -1
        }
        var result = fname.sort(sortbyfname);
        console.log(result);


    }
    sortzip(data) {
        let refer = data.Person;
        function sortbyzip(a, b) {
            return (a.zip - b.zip);
        }
        var result = refer.sort(sortbyzip);
        console.log(result);

    }
    printadd(data) {
        var person = data.Person
        for (const key in person) {
            console.log(person[key])
        }


    }
}
*/


var p = file.readFileSync('address.json')
nameRestriction = /[a-z]/g;
contactRestriction = /[0-9]/g;
class Address {
    constructor(addressb) {
        this.addressb;
    }
    createAddress(addressb) {
        var name = read.question("Please enter your first name: ");
        while (nameRestriction.test(name) == false) {
            name = read.question("No special characters Invalid name! :");
        }
        var lastName = read.question("Please enter your last name: ");
        while (nameRestriction.test(lastName) == false) {
            lastName = read.question("No special characters Invalid name! :");
        }
        console.log("***Address Information***");
        var street = read.question("Street: ");
        var city = read.question("City: ");
        while (nameRestriction.test(city) == false) {
            city = read.question(" No special characters city! :");
         }
        var state = read.question("State: ");
        while (nameRestriction.test(state) == false) {
            state = read.question(" No special characters state! :");
        }
        var nation = read.question("Nationality: ");
        while (nameRestriction.test(nation) == false) {
            nation = read.question(" No special characters Nationality! :");
        }
        var zip = read.question("Zip code: ");
        while (contactRestriction.test(zip) == false || zip.length != 6) {
            zip = read.question("Enter the zip code 6 digits only : ");
        }
        var phoneNum = read.question("Phone number: ");
        while (contactRestriction.test(phoneNum) == false || phoneNum.length != 10) {
            phoneNum = read.question(" Enter PhoneNumber 10 digits only :");
        }
        addressb.Person.push({
            "Name": name,
            "LastName": lastName,
            "Address": {
                "Street": street,
                "City": city,
                "State": state,
                "Nationality": nation,
                "Zip": zip,
                "PhoneNum": phoneNum
            }
        })
        file.writeFile('addressBook1.json', JSON.stringify(addressb), 'utf-8', function (err) {
            if (err) throw err
            console.log('Done!');
        })
        console.log("Address updated succesfully!");
        console.log("Your information as per our record is: \r\n First Name: " + name + "\r\nLast Name: " + lastName + "\r\nStreet: " + street + "\r\nCity: " + city + "\r\nState: " + state + "\r\nNationality: " + nation);
    }
    compare1(a, b) {
        if (a.Name.toLowerCase() < b.Name.toLowerCase()) {
            return -1;
        }
        if (a.Name.toLowerCase() > b.Name.toLowerCase()) {
            return 1;
        }
        return 0;
    }
    sorting(addressb) {
        console.log(addressb.Person.sort(this.compare1));
    }
    openProfile(addressb) {
        var temp = -1;
        if (addressb.Person.length > 0) {
            for (var i = 0; i < addressb.Person.length; i++) {
                console.log(addressb.Person[i]);
            }
            console.log("Welcome!!");
            var update = read.question("Please enter the name of profile: ");
            for (var k = 0; k < addressb.Person.length; k++) {
                if (update == addressb.Person[k].Name) {
                    temp = k;
                    console.log("What you want to do?");
                    console.log("1: Update");
                    console.log("2: Delete");
                    console.log("3: Sort");
                    console.log("4: Save");
                    console.log("5: Exit");
                    var choice2 = read.question("Please enter your choice: ");
                    switch (parseInt(choice2)) {
                        case 1:
                            /**
                             * update profile
                             */
                            console.log("What do you want to update? ");
                            console.log("1: Street");
                            console.log("2: City");
                            console.log("3: State");
                            console.log("4: Nationality");
                            console.log("5: Zip code");
                            console.log("6: Phone");
                            console.log("7: Exit");
                            var choice3 = read.question("Please enter your choice: ");
                            switch (parseInt(choice3)) {
                                case 1:
                                    var sUpdate = read.question("Enter the new street number: ");
                                    while (nameRestriction.test(sUpdate) == false && sUpdate.length > 3) {
                                        sUpdate = read.question("No special characters Invalid name! :");
                                    }
                                    var obj = {
                                        "Name": addressb.Person[k].Name,
                                        "LastName": addressb.Person[k].LastName,
                                        "Address": {
                                            "Street": sUpdate,
                                            "City": addressb.Person[k]["Address"].City,
                                            "State": addressb.Person[k]["Address"].State,
                                            "Nationality": addressb.Person[k]["Address"].Nation,
                                            "Zip": addressb.Person[k]["Address"].Zip,
                                            "PhoneNum": addressb.Person[k]["Address"].PhoneNum
                                        }
                                    }
                                    addressb.Person[k] = obj;
                                    save();
                                    break;
                                case 2:
                                    var cUpdate = read.question("Enter the new city name: ");
                                    while (nameRestriction.test(cUpdate) == false && cUpdate.length > 3) {
                                        cUpdate = read.question("No special characters Invalid name! :");
                                       }
                                    var obj = {
                                        "Name": addressb.Person[k].Name,
                                        "LastName": addressb.Person[k].LastName,
                                        "Address": {
                                            "Street": addressb.Person[k]["Address"].Street,
                                            "City": cUpdate,
                                            "State": addressb.Person[k]["Address"].State,
                                            "Nationality": addressb.Person[k]["Address"].Nation,
                                            "Zip": addressb.Person[k]["Address"].Zip,
                                            "PhoneNum": addressb.Person[k]["Address"].PhoneNum
                                        }
                                    }
                                    addressb.Person[k] = obj;
                                    save();
                                    break;
                                case 3:
                                    var stUpdate = read.question("Enter the new state name: ");
                                    while (nameRestriction.test(stUpdate) == false && stUpdate.length > 3) {
                                        stUpdate = read.question("No special characters Invalid name! :");
                                    }
                                    var obj = {
                                        "Name": addressb.Person[k].Name,
                                        "LastName": addressb.Person[k].LastName,
                                        "Address": {
                                            "Street": addressb.Person[k]["Address"].Street,
                                            "City": addressb.Person[k]["Address"].City,
                                            "State": stUpdate,
                                            "Nationality": addressb.Person[k]["Address"].Nation,
                                            "Zip": addressb.Person[k]["Address"].Zip,
                                            "PhoneNum": addressb.Person[k]["Address"].PhoneNum
                                        }
                                    }
                                    addressb.Person[k] = obj;
                                    save();
                                    break;
                                case 4:
                                    var nUpdate = read.question("Enter the new nation name: ");
                                    while (nameRestriction.test(nUpdate) == false && nUpdate.length > 3) {
                                        nUpdate = read.question("No special characters Invalid name! :");

                                    }
                                    var obj = {
                                        "Name": addressb.Person[k].Name,
                                        "LastName": addressb.Person[k].LastName,
                                        "Address": {
                                            "Street": addressb.Person[k]["Address"].Street,
                                            "City": addressb.Person[k]["Address"].City,
                                            "State": addressb.Person[k]["Address"].State,
                                            "Nationality": nUpdate,
                                            "Zip": addressb.Person[k]["Address"].Zip,
                                            "PhoneNum": addressb.Person[k]["Address"].PhoneNum
                                        }
                                    }
                                    addressb.Person[k] = obj;
                                    save();
                                    break;
                                case 5:
                                    var zUpdate = read.question("Enter the new zip code: ");
                                    while (contactRestriction.test(zUpdate) == false) {
                                        zUpdate = read.question("No special characters Invalid number! :")
                                    }
                                    var obj = {
                                        "Name": addressb.Person[k].Name,
                                        "LastName": addressb.Person[k].LastName,
                                        "Address": {
                                            "Street": addressb.Person[k]["Address"].Street,
                                            "City": addressb.Person[k]["Address"].City,
                                            "State": addressb.Person[k]["Address"].State,
                                            "Nationality": addressb.Person[k]["Address"].Nation,
                                            "Zip": zUpdate,
                                            "PhoneNum": addressb.Person[k]["Address"].PhoneNum
                                        }
                                    }
                                    addressb.Person[k] = obj;
                                    save();
                                    break;
                                case 6:
                                    var pUpdate = read.question("Enter the new phone number: ");
                                    while (contactRestriction.test(pUpdate) == false || pUpdate.length != 10) {
                                        pUpdate = read.question("No special characters Invalid number! :");

                                    }
                                    var obj = {
                                        "Name": addressb.Person[k].Name,
                                        "LastName": addressb.Person[k].LastName,
                                        "Address": {
                                            "Street": addressb.Person[k]["Address"].Street,
                                            "City": addressb.Person[k]["Address"].City,
                                            "State": addressb.Person[k]["Address"].State,
                                            "Nationality": addressb.Person[k]["Address"].Nation,
                                            "Zip": addressb.Person[k]["Address"].Zip,
                                            "PhoneNum": pUpdate
                                        }
                                    }
                                    addressb.Person[k] = obj;
                                    save();
                                    break;
                                case 7:
                                    console.log("ThankYou!");
                                    break;
                            }
                            break;
                        case 2:
                            var update = read.question("Please enter the index you want to delete: ");
                            delete addressb.Person[update];
                            for (var k = 0; k < addressb.Person.length; k++) {
                                if (addressb.Person[k] == null) {
                                    addressb.Person.splice(k, 1);
                                }
                            }
                            file.writeFile('addressBook1.json', JSON.stringify(addressb), 'utf-8', function (err) {
                                if (err) throw err
                                console.log('Done!')
                            })
                            break;
                        case 3:
                            this.sorting(addressb);
                            save();
                            break;
                        case 4:
                            function save() {
                                file.writeFile('addressBook1.json', JSON.stringify(addressb), 'utf-8', function (err) {
                                    if (err) throw err
                                    console.log('File Saved!!')
                                })
                            }
                            save();
                            break;
                        case 5:
                            console.log("ThankYou!!");
                            break;
                        default:
                            console.log("Please enter valid option");
                            break;
                    }
                }
            } if (temp == -1) {
            console.log("Profile unavailable!!Please create new one.");
            }
        }
        else {
            console.log("No profiles to display!!Please create a new profile!");
            this.createAddress();
        }
    }
}

var read = require('readline-sync');
var file = require('fs');
var  M = require('../utility/utilityDataStructure');
//var linkedList = new M.LinkedList();
var s = 0;
class StockAccount
{
    constructor()
    {

    }
    stockCreate(data)
    {
        var name1 = read.question("enter the name : ");
        var id1 = Math.floor(Math.random()*100);
        var share1=Math.floor(Math.random()*100);
        console.log(id1);
        
        data.customer.push(
            {
            name : name1,
            id : id1 ,
            share:share1      
            } 
        )
       console.log(data.customer);
        
        var d = file.writeFileSync('customer.json',JSON.stringify(data));
    }
    buy(data,data1)
    {
        console.log(data);
        var object = data.customer;
        var id1 = read.question("enter the id :");
        for(let i in object)
        {
            if(object[i].id == id1)
            {
                var index = data.customer.indexOf(data.customer[i]);
                var customername = object[i].name;
                console.log("company information");
                console.log(data1);
                var name1 = read.question("enter name of company share you want to buy")
                var object1 = data1.company;
                for(let i in object1)
                {
                    if(object1[i].name == name1)
                    {
                        console.log("company number of shares price of each share");
                        console.log(object1[i]);
                        var name10 = object1[i].name;
                        var number = read.questionInt("enter the number of shares you want to buy");
                        var s = "customer name :"+customername+ "and name of company "+name10+"buy number of shares "+number;
                        console.log(s);
                       
                        //this.stackps(s);
                        var time = new Date();
                        var time1 = "time of buying the share is "+time;
                        //this.queuetime(time1);
                        var n = parseInt(data.customer[index].share)
                        var n11 = parseInt(data1.company[i].share)
                        var num = parseInt(number);
                        var n1 = n + num;
                        var n2 = n11 - num;
                        if(n11 > num )
                        {
                            data.customer[index].share = n1;
                            data1.company[i].share = n2;
                            var d = file.writeFileSync('customer.json',JSON.stringify(data));
                            //console.log(d) 
                
                            var d1 = file.writeFileSync('company.json',JSON.stringify(data1));
                        }
                    }
                }
            }
        } 
    }
    sell(data , data1)
    {
        console.log(data);
        var object = data.customer;
        var id1 = read.question("enter the id :");
        for(let i in object)
        {
            if(object[i].id == id1)
            {
                var index = data.customer.indexOf(data.customer[i])
                var customername1 = object[i].name;
                console.log("company information");
                console.log(data1);
                var name1 = read.question("enter name of company you want to sell");
                var object1 = data1.company;
                for(let i in object1)
                {
                    if(object1[i].name == name1)
                    {
                        console.log("company number of shares and price of each share");
                        console.log(object1[i]);
                        var name11 = object1[i].name;
                        var number = read.questionInt("enter how many shares you want to sell");
                        var s = "customer name :"+customername1+ "and name of company "+name11+"sell number of shares "+number;
                        console.log(s);
                        
                        //this.stackps(s);
                        var time = new Date();
                        var time1 = "time of selling the share is "+time;
                        //this.queuetime(time1);
                        var n = parseInt(data.customer[index].share)
                        var n11 = parseInt(data1.company[i].share)
                        var num = parseInt(number);
                        var n1 = n - num;
                        var n2 = n11 + num;
                        data.customer[index].share = n1;
                        data1.company[i].share = n2;
                        var d = file.writeFileSync('customer.json',JSON.stringify(data));
                        var d1 = file.writeFileSync('company.json',JSON.stringify(data1));
                    }
                }
            }
        }
    }
   /**  stackps(s)
    {
        var stack = M.StackLinkedList;
        stack.push(s);
        stack.print();
    }*/
   /**  queuetime(time)
    {
        var queue = M.LinkListQ
        queue.enQueue(time);
        queue.print();
    }*/
    print(data , data1)
    {
        console.log("customer shares information :");
        console.log(data);
        console.log("company shares information :");
        console.log(data1);    
    }
}


module.exports = {
    Stock, Rice, Wheat, Pulses, inventoryManager, Address, StockAccount,

    /*****************************************replaceUsingRegex****************************************
     * @purpose    : To print the Modified Message.
     * @param      : To accept the input from the user and replace the string with the given input.
     * @function   : To read in the following message: Hello <<name>>, We have your full name as 
     *               <<full name>> in our system. your contact number is 91-xxxxxxxxxx. Please,let 
     *               us know in case of any clarification Thank you BridgeLabz 01/01/2016. Use Regex 
     *               to replace name, full name, Mobile#, and Date with proper value.
     **************************************************************************************************/

    replaceUsingRegex(name, fullName, num, day, fileString) {
        fileString = fileString.replace(/<<name>>/g, name)
        fileString = fileString.replace(/<<full name>>/g, fullName)
        fileString = fileString.replace(/91-xxxxxxxxxx/g, num)
        fileString = fileString.replace(/01-01-2016/g, day);
        return fileString;
    },


}