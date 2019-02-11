/******************************************************************************
 *  Execution       :   default node          : cmd> node deckOfCards.js
 *                      
 *  Purpose         : To print the Cards the received by the 4 Players using 2D Array…
 * 
 *  @description    
 *  @file           : deckOfCards.js
 *  @overview       : To initialize deck of cards having suit ("Clubs", "Diamonds", "Hearts", "Spades")
 *                    & Rank ("2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace").
 *                    Shuffle the cards using Random method and then distribute 9 Cards to 4 Players.
 *  @author         : Bhavana Sai B <bhavanab1506@gmail.com@gmail.com>
 *  @version        : 1.0
 *  @since          : 09/02/2019
 *
 ******************************************************************************/

var utility=require('util');
var suit= ["♣️", "🔸", "❤️", "♠️"];
var rank=['2','3','4','5','6','7','8','9','10',"jack","queen","king","ace"];
var cards=suit.length * rank.length;
var cardarr=[];

for(let i=0;i<suit.length;i++)
{
    for(let j=0;j<rank.length;j++)
    {
        var temp=" ";
        cardarr.push(temp+rank[j]+suit[i]);
    }
}

for(let i=0;i<cards;i++)
{
    var num=Math.floor(Math.random()*cards);
    var temp=cardarr[i]+" ";
    cardarr[i]=cardarr[num];
    cardarr[num]=temp;
}

var arr=[[],[],[],[]];
var a=0;

for(let i=0;i<4;i++)
{
    for(j=0;j<9;j++)
    {
        arr[i][j]=cardarr[j+a]
    }
    a=a+9;
}

for(let i=0;i<arr.length;i++)
{

    console.log("Deck of Cards["+i+"]= "+"["+""+arr[i]+"]");
    
}