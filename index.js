// Your code here
"use strict";


const dodger = document.getElementById("dodger");

function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
  else {
    playGameOverSound();
  }
}

function moveDodgerRight () {
  const leftNumbers = dodger.style.left.replace("px", ""); 
  const left = parseInt(leftNumbers, 10); 

    if (left < 360 ) {
    dodger.style.left = `${left + 1}px`;
  }
   else {
    playGameOverSound();
  }
}

function moveDodgerUp () {
const bottomNumbers = dodger.style.bottom.replace("px", "")
const bottom = parseInt(bottomNumbers, 10); 

if (bottom < 360) {
    dodger.style.bottom = `${bottom + 1}px`;
}
 else {
    playGameOverSound();
  }
}

function moveDodgerDown () {
const bottomNumbers = dodger.style.bottom.replace("px", "")
const bottom = parseInt(bottomNumbers, 10); 

if (bottom > 0) {
    dodger.style.bottom = `${bottom - 1}px`;
}
 else {
    playGameOverSound();
  }
}


const movementSound = document.getElementById("movement");
const gameoverSound = document.getElementById("gameoverSound");

function playSoundOnMovement() {
  movementSound.currentTime = 0;
  movementSound.play();
}

function playGameOverSound () {
    gameoverSound.currentTime = 0;
    gameoverSound.play();
}

document.addEventListener("keydown", (e) => {

  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
    playSoundOnMovement();
  }

  if (e.key === "ArrowRight") {
    moveDodgerRight();
    playSoundOnMovement();
  }

  if (e.key === "ArrowUp") {
    moveDodgerUp();
    playSoundOnMovement();
  }

  if (e.key === "ArrowDown") {
    moveDodgerDown();
    playSoundOnMovement();
  }

});