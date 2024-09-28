// Random number between 1 and 10
let randomNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 0;
const maxAttempts = 5;

// Function to start the game
function startGame() {
  // Reset game state
  randomNumber = Math.floor(Math.random() * 10) + 1;
  attempts = 0;
  document.body.style.backgroundColor = ""; // Reset background color

  // Start the guessing process
  guessNumber();
}

// Function to handle the guessing process
function guessNumber() {
  // Gather input using window.prompt
  let guess = window.prompt("Enter your guess (between 1 and 10):");

  // If the user clicks cancel
  if (guess === null) {
    window.alert("Game cancelled.");
    return;
  }

  // Parse the guess to an integer
  guess = parseInt(guess, 10);

  // Check if the input is a valid number
  if (isNaN(guess) || guess < 1 || guess > 10) {
    window.alert("Please enter a valid number between 1 and 10.");
    guessNumber(); // Restart the guessing process
    return;
  }

  // Increment attempts
  attempts++;

  // Check if max attempts are reached
  if (attempts >= maxAttempts) {
    window.alert(`Game Over! The correct number was ${randomNumber}.`);
    document.body.style.backgroundColor = ""; // Reset background color
    return; // Stop the game
  }

  // Check if the guess is correct
  if (guess === randomNumber) {
    window.alert(
      `Congratulations! You guessed the number in ${attempts} attempts!`
    );
    document.body.style.backgroundColor = "green"; // Change background to green
    return; // Stop further guessing
  }

  // Display "Too high" or "Too low" message
  if (guess > randomNumber) {
    window.alert("Too high! Try again.");
  } else {
    window.alert("Too low! Try again.");
  }

  // Change background to red for incorrect guesses
  document.body.style.backgroundColor = "red";

  // Call guessNumber again for the next guess
  guessNumber();
}

// Start the game after a short delay
setTimeout(startGame, 500);
