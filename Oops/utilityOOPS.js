
var read = require('readline-sync')
var file = require('fs')


class Card
{
    constructor(rank,suit)
    {
        this.rank=rank;
        this.suit=suit;
    }
}




class Deck 
{
    constructor()
    {
        this.suit = ["♣️", "🔸", "❤️", "♠️"];
        this.rank = ['2', '3', '4', '5', '6', '7', '8', '9', '10', "jack", "queen", "king", "ace"];
    }
    createDeck()
    {
        var cardarr = [];
        for (let i = 0; i < this.suit.length; i++) 
        {
            for (let j = 0; j < this.rank.length; j++) 
            {
                cardarr.push(new Card(this.rank[j],this.suit[i]));
            }
        }
        return cardarr;
        
    }


    printCard(Card)
    {
        return ""+Card.rank+Card.suit;
    }


    shuffle(cardarr)
    {
        var cards = this.suit.length * this.rank.length;
        for (let i = 0; i < cards; i++) 
        {
            var num = Math.floor(Math.random() * cards);
            var temp = cardarr[i];
            cardarr[i] = cardarr[num];
            cardarr[num] = temp;
        }
        return cardarr;
    }
        
}

module.exports ={Card,Deck}


