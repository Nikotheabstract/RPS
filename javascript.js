function getComputerChoice(){
let answer = Math.floor(Math.random()*3)+1;
if (answer === 1){
    console.log("computer chose rock")
    return "rock".toLowerCase();
} else if (answer === 2){
    console.log("computer chose paper");
    return "paper".toLowerCase();
} else if (answer === 3){
    console.log("computer chose scissors");
    return "scissors".toLowerCase();
}
return answer;
}

function getHumanChoice(){
   let humanChoice = prompt("rock, paper or scissors?", " ");
   console.log(`you chose ${humanChoice}`)
   return humanChoice.toLowerCase();
}  

function playRound(ComputerChoice, HumanChoice){
    if ((ComputerChoice === "rock" && HumanChoice === "scissors") ||
    (ComputerChoice === "paper" && HumanChoice === "rock") ||
    (ComputerChoice === "scissors" && HumanChoice === "paper")){
    return "you lost"
    } else if (ComputerChoice === HumanChoice){
        return "draw"
    } else {
        console.log("you won!");
        return "you won!"
    } 
}


let computerScore = 0
let humanScore = 0


