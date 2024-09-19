$(document).ready(function () {
  //console.log("Making sure it is on this line ->");
  const menuContainer = $("#menu_container");

  // Code edited to hold an object containind the items that have been selected!

  const selectedItems = {};

  let currentItemTotal = 0;

  console.log("Menu container:", menuContainer);

  function updateSelectedItems(foodBox, quantity) {
    const foodName = foodBox.find('label').text().trim();
    if (quantity > 0) {
      selectedItems[foodName] = quantity;
    } else {
      delete selectedItems[foodName];
    }
  }

  function handleIncrement() { const $button = $(this);
    const foodBox = $button.closest(".food-box");
    const counter = foodBox.find("#counter-value");
    let currentVal = parseInt(counter.text()) || 0;
    currentVal += 1;
    currentItemTotal += 1;
    counter.text(currentVal);
    updateSelectedItems(foodBox, currentVal);
    const itemTotalCounter = $('.nav-right-label').children('counter');
    itemTotalCounter.text(`${currentItemTotal} Items`); }

  function handleDecrement() {
    const $button = $(this);
    const foodBox = $button.closest(".food-box");
    const counter = foodBox.find("#counter-value");
    let currentVal = parseInt(counter.text()) || 0;
    if (currentVal > 0) {
      currentVal -= 1;
      currentItemTotal += 1;
    }

    counter.text(currentVal);
    updateSelectedItems(foodBox, currentVal);
    const itemTotalCounter = $('.nav-right-label').children('counter');
    itemTotalCounter.text(`${currentItemTotal} Items`);
    //console.log("Updated current value:", currentVal);
  }

  menuContainer.on("click", ".increment-btn", handleIncrement);
  menuContainer.on("click", ".decrement-btn", handleDecrement);

  $("#reviewOrderBtn").on("click", function() {
    const orderItemsContainer = $("#orderItems");
    orderItemsContainer.empty();
    for (const [name, quantity] of Object.entries(selectedItems)) {
      const itemElement = $("<div>").text(`${name} (${quantity})`);
      orderItemsContainer.append(itemElement);
    }
    $("#reviewPopup").show();
  });

  $(".close").on("click", function() {
    $("#reviewPopup").hide();
  });
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
