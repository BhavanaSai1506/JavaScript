/******************************************************************************
 *  Execution       :   default node          : cmd> node ticTacToe.js
 *                      
 *  Purpose         : To play a Cross Game or Tic-Tac-Toe Game. Player 1 is the Computer and the
 *                    Player 2 is the user. Player 1 take Random Cell that is the Column and Row. 
 * 
 *  @description    
 *  @file           : ticTacToe.js
 *  @overview       : Sum the number of times the count of heads and tails,calculate the percentage.
 *  @author         : Bhavana Sai B <bhavanab1506@gmail.com@gmail.com>
 *  @version        : 1.0
 *  @since          : 30/01/2019
 *
 ******************************************************************************/

var utility = require('../utility/utility');
const readline = require('readline-sync');

function ticTacToe() {
    var flag = false;
    var arr = utility.intializeGame();
    console.log("Player 1 : Computer, Symbole : O");
    console.log("Player 2 : You, Symbole : x");
    console.log("Winning isn't everything, but wanting to win is...");
    var count = 1;
    while (count <= 9) {
        arr = utility.computerPlayer(arr);
        count++;
        while (count > 4) {
            flag = utility.check(arr);
            break;
        }
        if (flag) {
            console.log("Computer is the winner. Better luck next time");
            break;
        }
        else if (count == 8) {
            console.log("Draw match.. Try next!");
            break;
        }
        arr = utility.userPlayer(arr);
        while (count > 4) {
            flag = utility.check(arr);
            break;

        }
        if (flag) {
            console.log("Gosh!.. I knew it. You are the winner");
            break;
        }
        count++;
    }
    console.log("Game end");
}
ticTacToe();

