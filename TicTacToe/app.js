let boxes = document.querySelectorAll(".box");
let resetBtn = document.getElementById("reset-game");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg")
let newGameBtn = document.querySelector("#new-game")


let turn = true;


let winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]

const resetGame = ()=>{
    msgContainer.classList.add("hide")
    enableBoxes();
}


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("clicked");
        if (turn) {
            box.innerText = "O"
            box.style.color = "red"
            turn = false
        } else {
            box.innerText = "X"
            box.style.color = "green"
            turn = true
        }
        box.disabled = true;
        checkWinner()
    })
});


const enableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}


const disabledBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }    
}    


const showWinner = (winner)=>{
    msgContainer.classList.remove("hide");
    disabledBoxes();
}


const checkWinner = () => {
    for (let pattner of winPattern) {
        let postVal1 = boxes[pattner[0]].innerText;
        let postVal2 = boxes[pattner[1]].innerText;
        let postVal3 = boxes[pattner[2]].innerText;

        if (postVal1 !== "" && postVal2 !== "" && postVal3 !== "") {
            if (postVal1 === postVal2 && postVal2 === postVal3) {
                msg.innerText = `winner ${postVal1}`
                showWinner(postVal1)
            }
        }
    }

    let drew = true;
    for (let box of boxes) {
        if (box.innerText === "") {
            drew = false
            break;
        }
    }
    if(drew){
        Swal.fire({
            title: "It's a Draw!",
            text: "The game ended in a draw",
            icon: "info"
        });
        resetGame()
    }
}


resetBtn.addEventListener("click", resetGame);
newGameBtn.addEventListener("click", resetGame);