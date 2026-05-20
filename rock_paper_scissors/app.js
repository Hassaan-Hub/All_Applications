let userScore = 0;
let compScore = 0;


const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");



const genCompChoice = (()=>{
    let options = ["rock", "paper", "scissors"]
    let rendInd = Math.floor(Math.random() * 3)
    return options[rendInd];
})


const gameDrew = (()=>{
    msg.innerText = "Game Drew"
})


const showWinner = ((userWinner, userChoice, compChoice)=>{
    if(userChoice){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! ${userChoice} beats ${compChoice}`
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You win! ${compChoice} beats ${userChoice}`
    }
})
