'use strict';

let number = Math.trunc(Math.random() * 20) + 1;
console.log(number);
let score = 20;
let highScore = 0;

document.querySelector(".check").addEventListener("click", function(){
    const guess = Number(document.querySelector(".guess").value);
    
    if (score === 1){
        document.querySelector(".score").textContent = 0;
        document.querySelector(".message").textContent = "Game over press Again! button in top left";
    } else if (!guess){
        document.querySelector(".message").textContent = "Guess a number";
    } else if (guess === number){
        document.querySelector(".message").textContent = "Correct!";
        document.querySelector(".number").textContent = number;
        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = "30rem";
        if (score > highScore) document.querySelector(".highscore").textContent = score;
    } else if (guess < number){
        update("low!");
    } else {
        update("high!");
    }
});

document.querySelector(".again").addEventListener("click", function(){
    number = Math.trunc(Math.random() * 20) + 1;
    console.log(number);
    score = 20;
    document.querySelector(".score").textContent = score;
    document.querySelector(".guess").value = null;
    document.querySelector(".number").textContent = "?";
    document.querySelector(".number").style.width = "15rem";
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".message").textContent = "Start guessing...";
});

function update(string){
    document.querySelector(".message").textContent = `Too ${string}`;
    score--;
    document.querySelector(".score").textContent = score;
}