"use stircit"
// let cards = [1,2,3,4,5,6,7,8,9,10,11,12,13]
// let dcards =[1,2,3,4,5,6,7,8,9,10,11,12,13]
let cards = []
let dcards =[]
let K = 13
let hands = cards.length
let sum = 0
let dealersum = 0
let isAlive = true
let hasBlackJack = false
let drawCard = true
let nodrawCard = false
let message = " "
let dealerEl = document.getElementById("dealer-el")
let dealersumEl = document.getElementById("dealersum-el")
let playerEl = document.getElementById("player-el")
let resultEl = document.getElementById("result-el")
let sumEl = document.getElementById("sum-el")

function dealerStart(){
    drawCard = true
    let dealercard1 = getRandomDealerCard()
    dcards = [dealercard1]
    dealersum = dealercard1
    godealaer()
}
function getRandomDealerCard() {
    let randomNumber = Math.floor( Math.random()*13 )+ 1
    if (randomNumber >11 ){
        return 10
    } else{
        return randomNumber
    } 
}
function godealaer(){
    dealerEl.textContent = "Cards: "
    for(let i  =0; i < dcards.length; i ++){
        dealerEl.textContent +=dcards[i] + " "
    }
    dealersumEl.textContent = "Sum: " + dealersum
    if(dealersum < 17){
    }else if(dealersum ===21){
        nodrawCard = true
    }else{
        drawCard = false
    }
}
function skipCard(){
    if(drawCard ===true && nodrawCard ===false){
        let dcard = getRandomDealerCard()
        dealersum += dcard
        dcards.push(dcard)
        godealaer()
    }else if(nodrawCard ===true && drawCard ===false){
        message ="You Lose1"
    }else if(drawCard === false ){
        comparison()
    }
    resultEl.textContent = message
}
function comparison(){
    if(dealersum > sum){
        message = "You lose3"
    }else{
        message = "You Win"
    }
    resultEl.textContent =message
}

function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 )+ 1
    if (randomNumber > 11){
        return 10
    }else{
        return randomNumber
    } 
}
function startCard(){
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
        hasBlackJack = true
    }else{
        message = "You BUST"
        isAlive = false
    }
    resultEl.textContent = message
}
function newCard(){
    if (isAlive === true && hasBlackJack ===false){
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}
