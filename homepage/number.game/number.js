const canvas = document.getElementById("mycanvas");

const ctx = canvas.getContext("2d");

//generating random number to be guessed.
let number = Math.floor(Math.random() * 50) + 1;

//query selectors for input statements in response to guess.
const guessesLeft = document.querySelector('.guessesLeft');
const finalResult = document.querySelector('.finalResult');
const loworHi = document.querySelector('.loworHi');

//query selectors for the input and submit input. 
const guessInput = document.querySelector('.guessInput');
const guessSubmit = document.querySelector('.guessSubmit');

//variable assigning to guess and resetting the game.
let guessCount = 1;
let resetButton;
let gameRunning = true;

function checkGuess() { 
	const userGuess = Number(guessInput.value);
	if (guessCount === 1) {
		guessesLeft.textContent = 'Previous guesses: ';
	}
//spaced so the values have a gap when displayed.
	guessesLeft.textContent += userGuess + ' ';
	
	if (userGuess === number) { 
		finalResult.textContent = 'You got the number right!';
		finalResult.style.backgroundColor = 'green';
		loworHi.textContent = '';
		gameRunning = false;
		setGameOver();
	} else if (guessCount === 10) { 
		finalResult.textContent = 'GAME OVER!';
		loworHi.textContent = '';
		gameRunning = false;
		setGameOver();
	} else { 
		finalResult.textContent = 'Guess again!';
		finalResult.style.backgroundColor = 'red';
		if (userGuess > number) { 
			loworHi.textContent = 'Your guess was too high!';
		} else if (userGuess < number) { 
			loworHi.textContent = 'Your guess was too low!';
		}
	   } 
//add event listener for the submit button! 
	   guessSubmit.addEventListener('click', checkGuess);
//increase guess amounts by one and reset it each time for a new guess.
	   guessCount++;
	   guessInput.value = '';
	   guessInput.
	   focus();
	}
       
	if (gameRunning === true) { 
		checkGuess();
	}	



//main background where the game will be.    
ctx.fillStyle = "PowderBlue";
ctx.fillRect(0,0, 700, 700);

//side bar where lives left will be calculated. 
ctx.fillStyle="CadetBlue";
ctx.fillRect(700, 0, 900, 700);

//bottom bar where points and options to input number will be. 
ctx.fillStyle="Blue";
ctx.fillRect=(0, 700, 900, 900);

//making bottom right circle. 
ctx.beginPath();
ctx.arc(800, 800, 250, 0, 2 * Math.PI);
ctx.fillStyle = "DarkSlateGray"
ctx.fill(); 
ctx.stroke();

//making triangle at the bottom right corner with the circle
ctx.beginPath();
ctx.moveTo(750,700);
ctx.lineTo(950,900);
ctx.lineTo(750,900);
ctx.lineTo(750,700);
ctx.fillStyle = "CadetBlue"
ctx.fill();
ctx.stroke();


//title of game on the top-left
ctx.font = "50px Arial";
ctx.fillText("New Numbers", 10, 50);

//instructions under the title. 
ctx.font = "20px Arial";
ctx.fillText("Guess a number from 1-50 using the up and down arrow keys!", 70, 150);
ctx.fillText("You have 10 attempts.", 230, 180)







