let p1Score = 0;
let p2Score = 0;

let p1Turn = true;

document.getElementById("btnRoll").addEventListener("click", function(){
    let randomVal = Math.floor(Math.random()*6 + 1);
    
    if(p1Turn){
        document.getElementById("player1Dice").textContent = randomVal
        p1Score = p1Score + randomVal
        document.getElementById("player1Score").textContent = p1Score
        document.getElementById("player1Dice").classList.remove("active")
        document.getElementById("player2Dice").classList.add("active")
        document.getElementById("message").textContent = "Player 2 Turn"
        p1Turn = false

        if(randomVal === 1){
            document.getElementById("message").textContent = "You lost the game, Player 2 Wins"
            document.getElementById("btnRoll").style.display = "none"
            document.getElementById("reset").style.display = "inline-block"
        }
        

    }else {
        document.getElementById("player2Dice").textContent = randomVal
        p2Score = p2Score + randomVal
        document.getElementById("player2Score").textContent = p2Score
        document.getElementById("player2Dice").classList.remove("active")
        document.getElementById("player1Dice").classList.add("active")
        document.getElementById("message").textContent = "Player 1 Turn"
        p1Turn = true

        if(randomVal === 1){
            document.getElementById("message").textContent = "You lost the game, Player 1 Wins"
            document.getElementById("btnRoll").style.display = "none"
            document.getElementById("reset").style.display = "inline-block"
        }
        
    }

    if(p1Score >= 20){
        document.getElementById("message").textContent = "Player 1 Wins"
        document.getElementById("btnRoll").style.display = "none"
        document.getElementById("reset").style.display = "inline-block"
    }else if(p2Score >= 20){
        document.getElementById("message").textContent = "Player 2 Wins"
        document.getElementById("btnRoll").style.display = "none"
        document.getElementById("reset").style.display = "inline-block"
    }
})

document.getElementById("reset").addEventListener("click", function(){
    p1Score = 0
    p2Score = 0
    p1Turn = true

    if( document.getElementById("player2Dice").classList.contains("active")) {
        document.getElementById("player2Dice").classList.remove("active");
        document.getElementById("player1Dice").classList.add("active");
    }

    document.getElementById("message").textContent = "Player 1 Turn"
    document.getElementById("player1Score").textContent = 0
    document.getElementById("player2Score").textContent = 0
    document.getElementById("player1Dice").textContent = "-"
    document.getElementById("player2Dice").textContent = "-"
    document.getElementById("btnRoll").style.display = "inline-block"
    document.getElementById("reset").style.display = "none"
})