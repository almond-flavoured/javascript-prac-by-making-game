const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button')
let userChoice;
let computerChoice;
let result;

// console.log(userChoiceDisplay)
// console.log(computerChoiceDisplay)

console.log(possibleChoices)


possibleChoices.forEach(el => {
  el.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
    console.log(userChoice)
    // computerChoiceDisplay.innerHTML = computerChoice;
  })
})

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3); // or possibleChoices.length
  // if (randomNumber === 1) {
  //   computerChoice = 'rock'
  // }
  // if (randomNumber === 2) {
  //   computerChoice = 'scissors'
  // }
  // if (randomNumber === 3) {
  //   computerChoice = 'paper'
  // }
  computerChoice = possibleChoices[randomNumber].id
  computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
  if(computerChoice === userChoice) {
    result = 'its a draw!'
  }
  
  // if (computerChoice === 'rock' 
  // ? userChoice === 'paper' : result = 'you win!' 
  // ? userChoice === 'scissors' : result = 'you lost!')

  // if (computerChoice === 'scissors'
  // ? userChoice === 'rock' : result = 'you win!'
  // ? userChoice === 'paper' : result = 'you lost!')

  // if (computerChoice === ' paper'
  // ? userChoice === 'rock' : result = 'you lost!'
  // ? userChoice === 'scissors' : result = 'you win!')

  if ((computerChoice === 'rock' && userChoice === 'paper') || 
  (computerChoice === 'scissors' && userChoice === 'rock') ||
  (computerChoice === 'paper' && userChoice === 'scissors')
  ) {
    result = 'you win!'
  }
  if ((computerChoice === 'rock' && userChoice === 'scissors') ||
  (computerChoice === 'scissors' && userChoice === 'paper') ||
  (computerChoice === 'paper' && userChoice === 'rock')
  ) {
    result = 'you lost!'
  }
  console.log(result)
  

  resultDisplay.innerHTML = result;
  console.log(resultDisplay.innerHTML)
}
