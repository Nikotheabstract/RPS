function getComputerChoice(){
let answer = Math.floor(Math.random()*3)+1;
if (answer === 1){
    console.log("computer chose rock")
    return "rock";
} else if (answer === 2){
    console.log("computer chose paper");
    return "paper";
} else if (answer === 3){
    console.log("computer chose scissors");
    return "scissors";
}
return answer;
}

function getHumanChoice(){
   let humanChoice = prompt("rock, paper or scissors?", " ");
   console.log(`you chose ${humanChoice}`)
   return humanChoice;
}  

function theWinner(getComputerChoice, getHumanChoice){
    if ((getComputerChoice === "rock" && getHumanChoice === "scissors") ||
    (getComputerChoice === "paper" && getHumanChoice === "rock") ||
    (getComputerChoice === "scissors" && getHumanChoice === "paper")){
    console.log("You lost!");
    } else if (getComputerChoice === getHumanChoice){
        console.log("draw!");
    } else {
        console.log("you won!");
    } 
}

