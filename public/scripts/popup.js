// Giving the window and buttons inside the window variable names.
const confirmBtn = document.getElementById("confirmOrderBtn")
const reviewWindow = document.getElementById("reviewPopup");
const changesBtn = document.getElementById("makeChangesBtn")
const reviewBtn = document.getElementById("reviewOrderBtn");
const span = document.getElementsByClassName("close")[0];

// Clicking the button opens the window
reviewBtn.onclick = function() {
  reviewWindow.style.display = "block";
}

// Clicking the 'span' area which is the close button closes the window.
span.onclick = function() {
  reviewWindow.style.display = "none";
}

// Clicking the 'make changes' button closes the window.
changesBtn.onclick = function() {
  reviewWindow.style.display = "none";
}

// Clicking the 'confirm' button should post the order details to the orders database.

confirmBtn.onclick = function() {
  
}


