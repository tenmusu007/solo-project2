"use stircit"
let sum = 0
let cards = []
let isAlive = true
let hasBlackJacl = false
let message = " "
let dealerEl = document.getElementById("dealer-el")
let playerEl = document.getElementById("player-el")
let resultEl = document.getElementById("result-el")
let sumEl = document.getElementById("sum-el")

function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 )+ 1
    if (randomNumber > 10){
        return 10
    } else if (randomNumber === 1){
        return 11
    } else {
        return randomNumber
    }
}
function drawCard(){
        isAlive = true
        let firstcard = getRandomCard()
        let secondcard = getRandomCard()
        cards = [firstcard, secondcard]
        sum = firstcard + secondcard
        renderGame()
}
function renderGame(){
    playerEl.textContent = "Cards: "
    for(let i = 0; i < cards.length; i++){
        playerEl.textContent +=cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum
    if (sum <= 20){
        message = "Do you want to draw a new card?"
    } else if( sum === 21){
        message = "You've got Blackjack"
        hasBlackJacl = true
    }else{
        message = "You're got out of the game!"
        isAlive = false
    }
    resultEl.textContent = message
}

function newCard(){
    if (isAlive === true && hasBlackJacl ===false){
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}