let HumanChoice = ""

function getHumanChoice(){
   HumanChoice = prompt("rock, paper or scissors?", "");
   console.log(`you chose ${HumanChoice}`)
   return HumanChoice.toLowerCase();
}  

const cnt = document.querySelectorAll("#container button")
const container = document.querySelector("#container")
let div = document.createElement("div")

cnt.forEach(button =>{
    button.addEventListener("click", () =>{
    HumanChoice = button.id;
    const computerChoice = getComputerChoice();
    const result = playRound(computerChoice, HumanChoice);
    div.textContent = `You chose ${button.id}. Computer chose ${computerChoice}. ${result}. Score: You ${humanScore} : Computer ${computerScore}`;
    return result;
  });
});

function getComputerChoice(){
    let result = ""
    let answer = Math.floor(Math.random()*3)+1;
    if (answer === 1){
       result = "computer chose rock"
        return "rock".toLowerCase();
    } else if (answer === 2){
        result ="computer chose paper";
        return "paper".toLowerCase();
    } else if (answer === 3){
       result = "computer chose scissors";
        return "scissors".toLowerCase();
    }
    return result;
    }

let computerScore = 0;
let humanScore = 0;


function playRound(ComputerChoice, HumanChoice) {
    let result = "";
    if ((ComputerChoice === "rock" && HumanChoice === "scissors") ||
    (ComputerChoice === "paper" && HumanChoice === "rock") ||
    (ComputerChoice === "scissors" && HumanChoice === "paper")){
        computerScore++;
        result = "you lost";
        
    } else if (ComputerChoice === HumanChoice){
        result = "draw";
        
    } else {
        humanScore++;
        result = "you won!";
    } 
    div.textContent = `${result} score: You ${humanScore} : computer ${computerScore}`;
    return result
    }

    container.appendChild(div);

