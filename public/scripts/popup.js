$(document).ready(function() {
const reviewWindow = document.getElementById("reviewPopup");
const changesBtn = document.getElementById("makeChangesBtn")

const span = document.getElementsByClassName("close")[0];
const confirmBtn = document.getElementById("confirmOrderBtn")

// Clicking the X
span.onclick = function() {
  // console.log('button clicked')
  reviewWindow.style.display = "none";
}

// Clicking the 'make changes'
changesBtn.onclick = function() {
  // console.log('button clicked')
  reviewWindow.style.display = "none";
}

// Clicking the 'confirm'
confirmBtn.onclick = function() {
}

})
