let score1El=document.getElementById("score1")
let score2El=document.getElementById("score2")
let score1=0
let score2=0
function add11() {
    score1+=1
    score1El.textContent=score1
    colorchange()
}
function add21() {
    score1+=2
    score1El.textContent=score1
    colorchange()
}
function add31() {
    score1+=3
    score1El.textContent=score1
    colorchange()
}
function add12() {
    score2+=1
    score2El.textContent=score2
    colorchange()
}
function add22() {
    score2+=2
    score2El.textContent=score2
    colorchange()
}
function add32() {
    score2+=3
    score2El.textContent=score2
    colorchange()
}
function newGame() {
    score1El.textContent=0
    score2El.textContent=0
    score1=0
    score2=0
    document.getElementById("guest").style.color="#EEEEEE"
    
}

function colorchange() {
    if (score1>score2) {
        document.getElementById("home").style.color="#F59E0B"
        document.getElementById("guest").style.color="#EEEEEE"
    }
    else if(score2>score1)
    {
        document.getElementById("guest").style.color="#F59E0B"
        document.getElementById("home").style.color="#EEEEEE"
    }
    else
    {
        document.getElementById("home").style.color="#EEEEEE"
        document.getElementById("guest").style.color="#EEEEEE"
    }
}