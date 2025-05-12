function getComputerChoice(){
let answer = Math.floor(Math.random()*3)+1;
if (answer === 1){
    console.log("rock");
} else if (answer === 2){
    console.log("paper");
} else if (answer === 3){
    console.log("scisors");
}
}

console.log(getComputerChoice());


