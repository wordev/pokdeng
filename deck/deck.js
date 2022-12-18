'use strict'

function DrawCard(player, dealer, deck) {
    try {
        let last = 0
        for (let i = 0; i < 2; i++) {
            for (let k = 0; k < dealer.length; k++) {
                dealer[k].card.push(deck[last])
                dealer[k].cardDesc += ", "+deck[last].cardType 
                last++
            }
            for (let j = 0; j < player.length; j++) {
                player[j].card.push(deck[last])
                player[j].cardDesc += ", "+deck[last].cardType 
                last++
            }

        }
    } catch (err) {
        throw new Error("DrawCard Error :  " + err)
    }
}

function ShuffleDeck(deck) {
    try {
        if (deck.length <= 0) {
            return new Error("ShuffleDeck Error : Deck length < 0")
        }

        for (let i = 0; i < deck.length; i++) {
            let randomIndex = Math.floor(Math.random() * (deck.length));
            let tempValue = deck[i]
            deck[i] = deck[randomIndex]
            deck[randomIndex] = tempValue
        }
    } catch (err) {
        throw new Error("ShuffleDeck Error :  " + err)
    }
}


function DeckCard() {
    try {
        let deck = []
        let listCardType = ['Spades', 'Hearts', 'Diamonds', 'Clubs']
        let listCardValue = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", 'King', 'Queen', 'Jack',]

        for (let i = 0; i < listCardType.length; i++) {
            for (let j = 0; j < listCardValue.length; j++) {
                deck.push({
                    cardType: listCardType[i] + "-" + listCardValue[j],
                    pokdengScore: j == 0 ? 1 : j >= 9 ? 0 : j + 1
                })
            }
        }
        return deck
    } catch (err) {
        throw new Error("DeckCard Error :  " + err)
    }
}


module.exports = { DeckCard, ShuffleDeck, DrawCard };
