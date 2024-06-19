const containerEL = document.querySelector('.container')
const btnPlayEL = document.querySelector(".btn_again")
const btnChckEL = document.querySelector(".btn_check")
const hideNumEL = document.querySelector(".hide_num")
const msgEL = document.querySelector(".message")
const inputNumEL = document.querySelector(".input_number")
const highScoreEL = document.querySelector(".high_score")
const scoreEL = document.querySelector(".score")

let secretNum = Math.trunc(Math.random() * 20 + 1)
// console.log(scretNum)

let score = 20
let highScore = 0
console.log(secretNum)

btnChckEL.addEventListener('click', () => {
    const guess = Number(inputNumEL.value)

    if (guess) {
        if (guess != secretNum) {
            if (score > 1) {
                score--
                scoreEL.textContent = score

                msgEL.textContent = guess > secretNum ? "Too High" : "Too Low"
                scoreEL.textContent = score

            } else {
                displayMessage("You've Lossed The Game :)")
                containerEL.style.backgroundColor = "#fff"
                scoreEL.textContent = 0
            }
        } else {
            hideNumEL.textContent = secretNum
            hideNumEL.style.width = "50%"
            hideNumEL.style.transition = "all 0.5s ease-in"
            containerEL.style.backgroundColor = "#e0d8d3"
            displayMessage("Congtratulation Yor've Won The Game :)")
        }

    } else {
        msgEL.textContent = 'Plz Enter The Number :('
        displayMessage('Plz Enter The Number :(')
    }
})

const displayMessage = function (message) {
    msgEL.textContent = message
}

btnPlayEL.addEventListener('click', () => {
    score = 20
    secretNum = Math.floor(Math.random() * 20) + 1
    scoreEL.textContent = score
    hideNumEL.textContent = "?"
    hideNumEL.style.width = "25%"
    hideNumEL.style.transition = "all 0.5s ease-in"
    inputNumEL.value = ""
    containerEL.styl.backgroundColor = "#ddd"
    displayMessage("Start Guess...................")
})