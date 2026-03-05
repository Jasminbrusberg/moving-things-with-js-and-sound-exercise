// Your code here
"use strict";


const dodger = document.getElementById("dodger");

function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

function moveDodgerRight () {
  const leftNumbers = dodger.style.left.replace("px", ""); 
  const left = parseInt(leftNumbers, 10); 

    if (left < 360 ) {
    dodger.style.left = `${left + 1}px`;
  }
}

function moveDodgerUp () {
const bottomNumbers = dodger.style.bottom.replace("px", "")
const bottom = parseInt(bottomNumbers, 10); 

if (bottom < 360) {
    dodger.style.bottom = `${bottom + 1}px`;
}
}

function moveDodgerDown () {
const bottomNumbers = dodger.style.bottom.replace("px", "")
const bottom = parseInt(bottomNumbers, 10); 

if (bottom > 0) {
    dodger.style.bottom = `${bottom - 1}px`;
}
}

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") moveDodgerLeft();
     playSoundOnMovement();
  if (e.key === "ArrowRight") moveDodgerRight();
     playSoundOnMovement();
  if (e.key === "ArrowUp") moveDodgerUp();
     playSoundOnMovement();
  if (e.key === "ArrowDown") moveDodgerDown();
     playSoundOnMovement();
});

const movementSound = document.getElementById("movement");

function playSoundOnMovement() {
  movementSound.currentTime = 0;
  movementSound.play();
}





