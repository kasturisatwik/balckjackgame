function random(){
    let r = Math.floor(Math.random()*13)+1
    if(r>10) return 10
    else if(r===1) return 11
    else return r
}

let fc = random()
// let sc = random()
let cards = [fc]
let total = fc
let isblackjack = false
let isAlive = true
let heading = document.getElementById("cont")
let card = document.getElementById("cards-el")
let sum = document.getElementById("sum-el")
let msg = ""

function startgame(){
    card.textContent = "Cards: "
    for(let i = 0;i<cards.length;i+=1){
        card.textContent += cards[i]+" "
    }  
    sum.textContent = "Sum : "
    sum.textContent += total
    if(total<21){
        msg = "wanna draw a new card"
    }
    else if(total===21){
        msg = "whoo u got a black jack!"
        isblackjack = true
    }
    else {
        msg = "You are out of the game"
        isAlive = false
    }
    heading.textContent = msg
          
} 
function newcard(){
    if(isblackjack === false && isAlive===true){
        let n = random()
        total+=n
        cards.push(n)
        startgame()
    }
}

 