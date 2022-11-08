'use strict';
const activePlayer = document.querySelectorAll('.player');
const buttonSlector = document.querySelectorAll('.btn');
let currentScore;
const nullDice = function () {
  document.querySelector('.dice').src = '';
  document.querySelector('.dice').alt = '';
};
nullDice();
const makeActive = function () {
  for (let i = 0; i < activePlayer.length; i++) {
    activePlayer[i].classList.toggle('player--active');
  }
};
const checkIfActive = function () {
  for (let i = 0; i < activePlayer.length; i++) {
    if (activePlayer[i].classList.contains('player--active')) return i;
  }
};

buttonSlector[1].addEventListener('click', function () {
  let randomNumber = Number(Math.trunc(Math.random() * 6) + 1);
  currentScore = Number(
    document.querySelector(`#current--${checkIfActive()}`).textContent
  );
  document.querySelector('.dice').src = `dice-${randomNumber}.png`;
  document.querySelector('.dice').alt = `Dice Number ${randomNumber}`;

  if (randomNumber === 1) {
    document.querySelector(`#current--${checkIfActive()}`).textContent = 0;
    makeActive();
  } else {
    currentScore += randomNumber;
    document.querySelector(`#current--${checkIfActive()}`).textContent =
      currentScore;
  }
});

buttonSlector[2].addEventListener('click', function () {
  if (currentScore > 0) {
    let setScore = Number(
      document.querySelector(`#score--${checkIfActive()}`).textContent
    );
    setScore += currentScore;
    document.querySelector(`#score--${checkIfActive()}`).textContent = setScore;
    document.querySelector(`#current--${checkIfActive()}`).textContent = 0;
    currentScore = 0;
  }
  makeActive();
});

buttonSlector[0].addEventListener('click', function () {
  nullDice();
  currentScore = 0;
  document.querySelector(`#score--0`).textContent = 0;
  document.querySelector(`#current--0`).textContent = 0;
  document.querySelector(`#score--1`).textContent = 0;
  document.querySelector(`#current--1`).textContent = 0;
  if (checkIfActive() === 1) {
    makeActive();
  }
});
