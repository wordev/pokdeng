'use strict'
const prompt = require("prompt-sync")();

function AskAmountPlayerPlay() {
    try {
        let ans = prompt("How many player will participate in this round? :  ");
        let player = parseInt(ans)
        return player && player > 0 ? player : AskAmountPlayerPlay()
    } catch (err) {
        throw new Error("AskAmountPlayerPlay Error :  " + err)
    }
}

function AskPlayAgain() {
    try {
        let ans = prompt("Wanna play more ? (yes/no) : ");
        return ans.toUpperCase() === "YES" ? true : ans.toUpperCase() === "NO" ? false : AskPlayAgain()
    } catch (err) {
        throw new Error("AskPlayAgain Error :  " + err)
    }
}


function AskBetPlayerAgian(playerNo) {
    try {
        let ans = prompt(`Please put your bet : Player ${playerNo} : `);
        let bet = parseInt(ans)

        return bet && bet > 0 ? bet : AskBetPlayerAgian(playerNo)
    } catch (err) {
        throw new Error("AskBetPlayerAgian Error :  " + err)
    }
}

function AskPlayerBet(amountPlayer) {
    try {
        let player = []
        for (let i = 0; i < amountPlayer; i++) {
            let bet = AskBetPlayerAgian(i + 1)
            player.push({
                player: i + 1,
                bet
            })
        }
        return player
    } catch (err) {
        throw new Error("AskPlayerBet Error :  " + err)
    }
}


module.exports = { AskPlayAgain, AskAmountPlayerPlay, AskPlayerBet };
