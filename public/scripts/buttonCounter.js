$(document).ready(function () {
  //console.log("Making sure it is on this line ->");
  const menuContainer = $("#menu_container");

  // Code edited to hold an object containind the items that have been selected!

  const selectedItems = {};

  console.log("Menu container:", menuContainer);

  function handleIncrement() {
    const $button = $(this);
    const foodBox = $button.closest(".food-box");
    const counter = foodBox.find("#counter-value");
    let currentVal = parseInt(counter.text()) || 0;

    currentVal += 1;

    counter.text(currentVal);
    //console.log("Increment");
  }

  function handleDecrement() {
    const $button = $(this);
    const foodBox = $button.closest(".food-box");
    const counter = foodBox.find("#counter-value");
    let currentVal = parseInt(counter.text()) || 0;
    if (currentVal > 0) {
      currentVal -= 1;
    }

    counter.text(currentVal);
    //console.log("Updated current value:", currentVal);
  }

  

  menuContainer.on("click", ".increment-btn", handleIncrement);
  menuContainer.on("click", ".decrement-btn", handleDecrement);

  $('confirmOrderBtn').on('submit', function(event){
    event.preventDefault();
    const $button = $(this);
    const foodBox = $button.closest(".food-box");
    const counter = foodBox.find("#counter-value");

  
    // $.ajax({
    //   type: "POST",
    //   url: "/order",
    //   data: 
    // })
    
  })
  
})

// Pseudocode for updating the Review Order List

// Update Selected / Order Items:
// Function to update the selectedItems object:
// Get the food name from the food box.
// If the quantity is greater than 0, add / update the item in selectedItems.
// If the quantity is 0, remove the item from selectedItems.
// Attach Event Listeners:
// Attach the increment button click handler to the menu_container.
// Attach the decrement button click handler to the menu_container.
// Show Popup with Selected Items:
// When the review order button is clicked:
// Clear the current order items in the popup.
// Loop through the selectedItems object.
// Create and append elements for each selected item and its quantity.
// Show the popup.
// Close Popup:
// When the close button in the popup is clicked:
// Hide the popup.
