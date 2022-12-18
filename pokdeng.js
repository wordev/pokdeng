'use strict'

const ask = require("./ask/ask")
const deck = require("./deck/deck")
const score = require("./score/score")


class Player {
    constructor(bet) {
        this.wallet = 0
        this.bet = bet
        this.card = []
        this.score = 0
        this.cardDesc = ""

    }

    getScore() {
        let score = this.card.reduce((sum, cardObj) => {
            return sum += cardObj.pokdengScore
        }, 0)
        this.score = score > 9 ? score.toString().substring(1, 2) : score
        return this.score
    }
}


class Dealer {
    constructor() {
        this.card = []
        this.score = 0
        this.cardDesc = ""

    }

    getScore() {
        let score = this.card.reduce((sum, cardObj) => {
            return sum += cardObj.pokdengScore
        }, 0)
        this.score = score > 9 ? score.toString().substring(1, 2) : score
        return this.score
    }
}



function CreateDealer() {
    let dealer = []
    dealer.push(new Dealer())
    return dealer
}


function CreatePlayerAndBet(playerBet) {
    try {
        let player = []
        for (let i = 1; i <= playerBet.length; i++) {
            player.push(new Player(playerBet[i - 1].bet))
        }
        return player
    } catch (err) {
        throw new Error("CreatePlayerAndBet Error :  " + err)
    }
}




(function Run() {

    try {

        let playAgin = true
        let deckcard = deck.DeckCard()
        //if you want to player as one set = false
        let multiPlayer = false
        let player
        while (playAgin) {


            //kept amount player
            let playerAmount = multiPlayer ? ask.AskAmountPlayerPlay() : 1

            //kept bet from player
            let playerBet = ask.AskPlayerBet(playerAmount)

            //create class player from bet
            player = CreatePlayerAndBet(playerBet)

            //sheffle deck
            deck.ShuffleDeck(deckcard)

            //create dealer 
            let dealer = CreateDealer()

            //draw both player and dealer
            deck.DrawCard(player, dealer, deckcard)

            //get winner
            score.ProcessWinner(player, dealer)

            //ask play again
            ask.AskPlayAgain() ? playAgin = true : playAgin = false
        }
        if (!playAgin) {
            score.RemainChipsAllPlayer(player)
        }
    } catch (err) {
        throw err
    }


})()