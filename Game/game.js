const randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.guesses');

const p = document.createElement('p')


let prevGuess = []
let numGuess = 1

let playGame = true;

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault()
       const guess = parseInt(userInput.value)
       console.log(guess)
       validateGuess(guess)
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid number')
    }else if(guess < 1){
        alert('Please Enter your more than 1')
    } else if(guess > 100){
        alert('Please enter a number less than 100')
    } else {
        prevGuess.push(guess)
        if(numGuess === 11){
            displayGuess(guess)
            displayMessage(`Opps !!! Game Over .Random number was
                ${randomNumber} `)
                endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
   if(guess === randomNumber){
      displayMessage('Congrats You guessed right')
      endGame()
   } else if(guess < randomNumber){
    displayMessage(`Number is TOOO low`)
   } else if(guess > randomNumber){
    displayMessage(`Number is Too High`)
   }
}

function displayGuess(guess){
    userInput.value = ' '
}

function displayMessage(message){
    //
}

function endGame(){

}

function newGame(){

}

