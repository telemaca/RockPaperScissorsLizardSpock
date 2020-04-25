//MOSTRAR/OCULTAR EL PANEL DE REGLAS
const showHideRules = () => rules.style.display = rules.style.display === "none" ? "block" : "none"

const rulesBtn = document.querySelector(".rules-btn")
const rules = document.querySelector(".rules-container")
const closeIcon = document.querySelector(".close-icon")

rulesBtn.addEventListener("click", showHideRules)
closeIcon.addEventListener("click", showHideRules)

//----------------------------------------------------------------------------------------------------


const getRockPaperScissor = () => {
    const results = ["rock", "paper", "scissors", "lizard", "spock"]
    const i = Math.round(Math.random() * 4)
    return results[i]
} 

const hideOptions = () => {
    optionsDisplay.style.display = "none"
    visualResult.style.display = "flex"
}

const showOptions = () => {
    optionsDisplay.style.display = "flex"
    visualResult.style.display = "none"
}

const showUserChoice = userChoice => {
    userChoiceInner.innerHTML = imagesURL[userChoice]
    userChoiceOuter.style.background = backgrounds[userChoice]
}

const showComputerChoice = computerChoice => {
    computerChoiceInner.style.backgroundColor = "honeydew"
    computerChoiceInner.innerHTML = imagesURL[computerChoice]
    computerChoiceOuter.style.background = backgrounds[computerChoice]
}

const hideComputerChoice = () => {
    computerChoiceInner.style.backgroundColor = "hsl(230, 59%, 16%)"
    computerChoiceInner.innerHTML = ""
    computerChoiceOuter.style.background = "none"
}

const getWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return "EMPATAMOS"
    } 
    if (userChoice === "rock") {
        return computerChoice === "scissors" || computerChoice === "lizard" ? "GANASTE" : "GANÉ YO"
    }
    if (userChoice === "paper") {
        return computerChoice === "rock" || computerChoice === "spock" ? "GANASTE" : "GANÉ YO"
    }
    if (userChoice === "scissors") {
        return computerChoice === "paper" || computerChoice === "lizard" ? "GANASTE" : "GANÉ YO"
    }
    if (userChoice === "lizard") {
        return computerChoice === "paper" || computerChoice === "spock" ? "GANASTE" : "GANÉ YO"
    }
    if (userChoice === "spock") {
        return computerChoice === "scissors" || computerChoice === "rock" ? "GANASTE" : "GANÉ YO"
    }
}

const showTextResult = result => {
    resultAndPlayAgain.style.display = "flex"
    writtenResult.innerHTML = result
}

const hideTextResult = () => {
    resultAndPlayAgain.style.display = "none"
    writtenResult.innerHTML = ""
}

const animateWinner = result => {
    if (result === "GANASTE") {
        userWinner.style.display = "block"
    } else if (result === "GANÉ YO") {
        computerWinner.style.display = "block"
    }
}

const hideWinnerEffect = () => {
    userWinner.style.display = "none"
    computerWinner.style.display = "none"
}

const updateScore = result => {
    if (result === "GANASTE") {
        const score = Number(userScore.innerHTML)
        userScore.innerHTML = score+1
    } else if (result === "GANÉ YO") {
        const score = Number(computerScore.innerHTML)
        computerScore.innerHTML = score+1
    }
}

const showResult = (optionBtn) => {
    userChoice = optionBtn.id
    hideOptions()
    showUserChoice(userChoice)
    computerChoice = getRockPaperScissor()
    setTimeout(showComputerChoice, 1000, computerChoice)
    const result = getWinner(userChoice, computerChoice)
    setTimeout(showTextResult, 2000, result)
    setTimeout(animateWinner, 2000, result)
    setTimeout(updateScore, 2000, result)
}

const resetVisualResult = () => {
    hideWinnerEffect()
    hideTextResult()
    hideComputerChoice()
}


const playAgain = () => {
    showOptions()
    resetVisualResult()
}



let userChoice = ""
let computerChoice = ""
const optionBtns = document.querySelectorAll(".option")
const optionsDisplay = document.querySelector(".options-container")
const visualResult = document.querySelector(".first-step")
const userChoiceOuter = document.querySelector(".user-choice")
const userChoiceInner = document.querySelector(".user-choice-inner")
const computerChoiceOuter = document.querySelector(".computer-choice")
const computerChoiceInner = document.querySelector(".computer-choice-inner")
const resultAndPlayAgain = document.querySelector(".actual-result")
const writtenResult = document.querySelector(".text-result")
const userWinner = document.querySelector(".user-winner")
const computerWinner = document.querySelector(".computer-winner")
const playAgainBtn = document.querySelector(".play-again-btn")
const userScore = document.querySelector(".user-score")
const computerScore = document.querySelector(".computer-score")



//-----------------------------------------------------------------------------------------------------
//DATA DE IMÁGENES Y COLORES DE CADA OPCIÓN------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------
const imagesURL = {
    scissors: '<img src="images/icon-scissors.svg" alt="">',
    rock: '<img src="images/icon-rock.svg" alt="">',
    paper: '<img src="images/icon-paper.svg" alt="">',
    lizard: '<img src="images/icon-lizard.svg" alt="">',
    spock: '<img src="images/icon-spock.svg" alt="">'
}

const backgrounds = {
    scissors: 'linear-gradient(hsl(39, 89%, 49%), hsl(40, 84%, 53%))',
    rock: 'linear-gradient(hsl(349, 71%, 52%), hsl(349, 70%, 56%))',
    paper: 'linear-gradient(hsl(230, 89%, 62%), hsl(230, 89%, 65%))',
    lizard: 'linear-gradient(hsl(261, 73%, 60%), hsl(261, 72%, 63%))',
    spock: 'linear-gradient(hsl(189, 59%, 53%), hsl(189, 58%, 57%))'
}


//-----------------------------------------------------------------------------------------------------
// EVENT LISTENERS ------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------

document.addEventListener('click', (event) => {
    if (event.target.classList.contains('option')) {
      showResult(event.target)
    }
})

playAgainBtn.addEventListener("click", playAgain)