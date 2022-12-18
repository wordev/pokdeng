'use strict'


function PrintCardPlayerDealer(player, dealer) {
    player.forEach((e, i) => {
        console.log(`Player ${i + 1} got`, e.cardDesc)

    })

    dealer.forEach((e) => {
        console.log(`Dealer got`, e.cardDesc)

    })
}

function ProcessWinner(player, dealer) {
    PrintCardPlayerDealer(player, dealer)
    let dealerScore = dealer[0].getScore()

    player.forEach((e, i) => {

        if (dealerScore > e.getScore()) {
            console.log(`Dealer Win Player ${i + 1} with Dealer Score=${dealerScore} , Player${i + 1} Score=${e.getScore()} `)
            player[i].wallet -= e.bet

        }
        else if (dealerScore == e.getScore()) {
            console.log(`Dealer Draw Player ${i + 1} with Dealer Score=${dealerScore} , Player${i + 1} Score=${e.getScore()} `)
            player[i].wallet = e.bet

        }
        else {
            console.log(`Dealer Lose Player ${i + 1} with  Dealer Score=${dealerScore} , Player${i + 1} Score=${e.getScore()}, You got chips = ${e.bet}`)
            player[i].wallet += e.bet
        }
    })

}


function RemainChipsAllPlayer(player) {
    player.forEach((e, i) => {

        if (e.wallet >= 0) {
            console.log(`Player ${i + 1} remain chips  = ${e.wallet} `)
        } else {
            console.log(`Player ${i + 1} lose chips  = ${e.wallet} `)
        }
    })
}

module.exports = { ProcessWinner, RemainChipsAllPlayer };
