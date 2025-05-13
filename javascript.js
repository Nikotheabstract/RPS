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
   let humanChoice = prompt("rock, paper or scissors?", "");
   console.log(`you chose ${humanChoice}`)
   return humanChoice.toLowerCase();
}  

let computerScore = 0;
let humanScore = 0;


function playRound(ComputerChoice, HumanChoice) {
    if ((ComputerChoice === "rock" && HumanChoice === "scissors") ||
    (ComputerChoice === "paper" && HumanChoice === "rock") ||
    (ComputerChoice === "scissors" && HumanChoice === "paper")){
        computerScore++;
        result = "you lost";
    } else if (ComputerChoice === HumanChoice){
        result = "draw"
    } else {
        humanScore++;
        result = "you won!";
    } 
    console.log(`score: You ${humanScore} : computer ${computerScore}`);
    return result
    }

function playGame(){
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());  
    playRound(getHumanChoice(), getComputerChoice()); 
    playRound(getHumanChoice(), getComputerChoice());  
    playRound(getHumanChoice(), getComputerChoice()); 
    
    let gameResult = (humanScore > computerScore)
        ?"you are the winner!"
        :(humanScore < computerScore) 
        ?"you lost!"
        :"it's a draw!";
    console.log(gameResult);
}