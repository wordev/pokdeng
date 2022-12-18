



# Skooldio

Skooldio is going to develop a simple Pok-Deng (“ป๊อกเด้ง”) game. The requirements are as following:
In playing Pok-Deng, the initial step is putting your bets. After placing your bet, say 5 chips, the dealer will shuffle the deck, and deal two cards for you. The dealer gets the last pair

The values of the cards as shown

- Ace is one point. 
- Numbers 2 to 9 have face values
- the King, Queen, Jack, and 10 are zero. 

Then it comes to scoring against the dealer, players can beat, tie with, or lose. 
- If Player beat the dealer, you get the payout equal to the original bet
- If Player tie with the dealer, you get nothing
- Otherwise, you lose the bet.

Player chose to continue or stop
If you continue, then start step 1 again. 
At the end of the game,  the game shows your net chip on hand.

## How to start

```bash
node pokdeng.js
```

## Option
You can change multiPlayer = true in the file pokdeng.js, if you want to play multiple players. Default is false it means one player
```
function Run() {
   multiPlayer = true
}
```

## How to Play
```
Please put your bet : Player 1 : 564
Player 1 got , Hearts-3, Hearts-Ace
Dealer got , Spades-2, Diamonds-King
Dealer Lose Player 1 with  Dealer Score=2 , Player1 Score=4, You got chips = 564
Wanna play more ? (yes/no) : no
Player 1 remain chips  = 564 

```




## Ref

https://www.makeareadme.com/

https://sebhastian.com/javascript-console-input/
