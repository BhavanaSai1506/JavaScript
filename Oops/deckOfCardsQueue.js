/******************************************************************************
 *  Execution       :   default node          : cmd> node deckOfCardsQueue.js
 *                      
 *  Purpose         : To Print the Player and the Cards received by each Player.
 * 
 *  @description    
 *  @file           : deckOfCardsQueue.js
 *  @overview       : To create a Player Object having Deck of Cards, and having ability to Sort
 *                    by Rank and maintain the cards in a Queue implemented using Linked List. Do
 *                    not use any Collection Library. Further the Player are also arranged in Queue.
 *  @author         : Bhavana Sai B <bhavanab1506@gmail.com@gmail.com>
 *  @version        : 1.0
 *  @since          : 09/02/2019
 *
 ******************************************************************************/

var read=require('readline-sync');
var utilityDS=require('../utility/utilityDataStructure');
var utility=require('../utility/utility');
var utilityL=require('util');
function deckCards(){
    var suit= ["♣️", "🔸", "❤️", "♠️"];
    var rank=["King","Queen","Jack","Ace","2","3","4","5","6","7","8","9","10"];
    var cards=suit.length*rank.length;
    var cardarr=[];
    for(let i=0;i<suit.length;i++)
    {
        for(let j=0;j<rank.length;j++)
        {
            var temp="";
            cardarr.push(temp+rank[j]+suit[i])
        }
    }
    for(let i=0;i<cards;i++)
    {
        var num=Math.floor(Math.random()*cards)
        var temp=cardarr[i];
        cardarr[i]=cardarr[num];
        cardarr[num]=temp;
    }
    var player1=new utilityDS.LinledListQueue;
    var player2=new utilityDS.LinledListQueue;
    var player3=new utilityDS.LinledListQueue;
    var player4=new utilityDS.LinledListQueue;
    for(let i=0;i<cardarr.length;i++){
        if(i>=0 && i<13)
        player1.enQueue(cardarr[i])
        else if(i>=13 && i<26)
        player2.enQueue(cardarr[i])
        else if(i>=26 && i<39)
        player3.enQueue(cardarr[i])
        else
        player4.enQueue(cardarr[i])
    }
    var data =player1.printList().trim();
    var arr=data.split(" ");
    var arr10=utility.bubbleSort(arr);
    //console.log("  [  "+ arr10 +"  ]  " );
    var data1=player2.printList().trim();
    var arr1=data1.split(" ");
    var arr11=utility.bubbleSort(arr1);
    //console.log("  [  "+ arr11 +"  ]  ");
    var data2=player3.printList().trim();
    var arr2=data2.split(" ");
    var arr12=utility.bubbleSort(arr2);
   // console.log("  [  "+ arr12 +"  ]  ");  
    var data3=player4.printList().trim();
    var arr3=data3.split(" ");
    var arr13=utility.bubbleSort(arr3);
   // console.log("  [  "+ arr13 +"  ]  ");
    //console.log("--------------------------------");
}
deckCards();
      


    
/*var D=require('../../ObjectOrientedPrograms/Oppsutility')
var file=require('fs')
var data1=file.readFileSync('AddressBook.json','utf8')
var data=JSON.parse(data1)
console.log(data.Person)
D.address(data)

var D=require('../../ObjectOrientedPrograms/Oppsutility')
var M=require('../../ObjectOrientedPrograms/ADDress/Address')
var file=require('fs')
var data1=file.readFileSync('Address.json','utf8')
var data=JSON.parse(data1)
var object=new M.AddressBook
object.address(data)



var read = require('readline-sync')
  var file = require('fs')
  var sort=require('../../utility/utility')
 // var D=require('../utility/utility')
  */