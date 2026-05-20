let userScore = 0;
let compScore = 0;


const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");



const genCompChoice = (() => {
    let options = ["rock", "paper", "scissors"]
    let rendInd = Math.floor(Math.random() * 3)
    return options[rendInd];
})


const gameDrew = (() => {
    msg.innerText = "Game Drew"
})


const showWinner = ((userWinner, userChoice, compChoice) => {
    if (userWinner) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! ${userChoice} beats ${compChoice}`
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You win! ${compChoice} beats ${userChoice}`
    }
})


const playGame = ((userChoice) => {
    let compChoice = genCompChoice()

    if (userChoice === compChoice) {
        gameDrew()
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice)
    }
})


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id")
        playGame(userChoice)
    })
})
