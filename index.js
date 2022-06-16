
let cards = []
let sum = 0
let hasBlackJack = true
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
//let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")

let player = {
    Name: "User",
    Chips: 145
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.Name + ": $" + player.Chips

function getRandomCard(){
    let random = Math.floor(Math.random() * 13 + 1)
    if(random > 10){
        return 10
    }
    else if(random === 1){
        return 11
    }
    else{
        return random
    }
}

function startGame(){
    isAlive = true
    hasBlackJack = false
    let firstCard = getRandomCard() 
    let secondCard = getRandomCard() 
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame(){

    cardsEl.textContent = "Cards: "
    for(let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum

    if(sum <= 20){
        message = "Do you want to draw a new card?"
    }
    else if(sum === 21){
        message = "You've got Blackjack"
        hasBlackJack = true
    }
    else{
        message = "You're out of the game"
        isAlive = false
    }

    messageEl.textContent = message
}

function newCard(){
    if(isAlive === true && hasBlackJack === false)
    {
        let card = getRandomCard()
        sum += card

        cards.push(card)
        cardsEl.textContent = " " + card
        sumEl.textContent = sum

        renderGame()
    }
}
