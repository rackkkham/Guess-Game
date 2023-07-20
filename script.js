'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const numberElement = document.querySelector('.number');
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there's no input
  if (!guess) {
    displayMessage('⛔️ No number!');

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    numberElement.textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    // Changing style if Win
    document.querySelector('body').style.backgroundColor = '#60b347';
    numberElement.style.width = '30rem';

    // When guess is wrong
  } else if (guess !== secretNumber) {
    score--, displayScore(score);
    displayMessage(guess < secretNumber ? '📉 Too low' : '📈 Too high');
    if (score < 1) {
      displayMessage('💥 You Lost the Game');
      displayScore(0);
    }
  }
});

// When Again! clicked
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  displayScore(score);
  numberElement.textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  numberElement.style.width = '15rem';
});
