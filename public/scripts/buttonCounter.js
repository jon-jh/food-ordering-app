$(document).ready(function () {
  const reviewWindow = document.getElementById("reviewPopup");
  const changesBtn = document.getElementById("makeChangesBtn");

  const span = document.getElementsByClassName("close")[0];
  const confirmBtn = document.getElementById("confirmOrderBtn");
  const selectedItems = {};

  function updateSelectedItems(foodBox, quantity) {
    const foodName = foodBox.find("label").text().trim();
    if (quantity > 0) {
      selectedItems[foodName] = quantity;
    } else {
      delete selectedItems[foodName];
    }
  }

  $("#reviewOrderBtn").on("click", function () {
    const orderItemsContainer = $("#orderItems");
    orderItemsContainer.empty();
    for (const [name, quantity] of Object.entries(selectedItems)) {
      const itemElement = $("<div>").text(`${name} (${quantity})`);
      orderItemsContainer.append(itemElement);
    }
    $("#reviewPopup").show();
  });

  $(".close").on("click", function () {
    $("#reviewPopup").hide();
  });

  // Clicking the X
  span.onclick = function () {
    // console.log('button clicked')
    reviewWindow.style.display = "none";
  };

  // Clicking the 'make changes'
  changesBtn.onclick = function () {
    // console.log('button clicked')
    reviewWindow.style.display = "none";
  };

  // Clicking the 'confirm'
  confirmBtn.onclick = function () {};

  const menuContainer = $("#menu_container");

  // Code edited to hold an object containind the items that have been selected!

  console.log("Menu container:", menuContainer);

  let currentTotal = 0;
function handleIncrement() {
  const $button = $(this);
  const foodBox = $button.closest(".food-box");
  const counter = foodBox.find("#counter-value");
  let currentVal = parseInt(counter.text());
  currentVal += 1;
  currentItemTotal += 1;
  counter.text(currentVal);
  updateSelectedItems(foodBox, currentVal);
  const itemTotalCounter = $(".nav-right-label").children("counter");
  itemTotalCounter.text(`Make Item Counter Here (${currentItemTotal} Items)`);
}
function handleDecrement() {
  const $button = $(this);
  const foodBox = $button.closest(".food-box");
  const counter = foodBox.find("#counter-value");
  let currentVal = parseInt(counter.text());
  if (currentVal > 0) {
    currentVal -= 1;
    currentItemTotal -= 1;
  }
  counter.text(currentVal);
  updateSelectedItems(foodBox, currentVal);
  const itemTotalCounter = $(".nav-right-label").children("counter");
  itemTotalCounter.text(`Make Item Counter Here (${currentItemTotal} Items)`);
}

  menuContainer.on("click", ".increment-btn", handleIncrement);
  menuContainer.on("click", ".decrement-btn", handleDecrement);

  console.log($("#confirmOrderBtn"));

  $("#confirmOrderBtn").on("click", function (event) {
    event.preventDefault();
    const $button = $(this);
    const orderItems = $("#orderItems").children();
    const orderItemsArray = [];
    const phoneNumber = $("#phoneNumber").val();
    for (const item of orderItems) {
      const itemValues = $(item).text().split("$");
      const [price, quantity] = itemValues[1].split("(");
      const name = itemValues[0].trim();
      const adjustedPrice = price.trim();
      const adjustedQuantity = quantity.replace(")", "").trim();
      console.log(name, adjustedPrice, adjustedQuantity);
      orderItemsArray.push({ name, quantity: adjustedQuantity });
    }
    // const counter = foodBox.find("#counter-value");
    console.log($button);
    console.log(orderItems);

    const data = {
      orders: orderItemsArray,
      phoneNumber,
    };

    console.log(data);

    // console.log(counter)
    $.ajax({
      type: "POST",
      url: "/order",
      contentType: "application/json",
      data: JSON.stringify(data),
    });
  });
});

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
let currentTotal = 0;
function handleIncrement() {
  const $button = $(this);
  const foodBox = $button.closest(".food-box");
  const counter = foodBox.find("#counter-value");
  let currentVal = parseInt(counter.text());
  currentVal += 1;
  currentItemTotal += 1;
  counter.text(currentVal);
  updateSelectedItems(foodBox, currentVal);
  const itemTotalCounter = $(".nav-right-label").children("counter");
  itemTotalCounter.text(`Make Item Counter Here (${currentItemTotal} Items)`);
}
function handleDecrement() {
  const $button = $(this);
  const foodBox = $button.closest(".food-box");
  const counter = foodBox.find("#counter-value");
  let currentVal = parseInt(counter.text());
  if (currentVal > 0) {
    currentVal -= 1;
    currentItemTotal -= 1;
  }
  counter.text(currentVal);
  updateSelectedItems(foodBox, currentVal);
  const itemTotalCounter = $(".nav-right-label").children("counter");
  itemTotalCounter.text(`Make Item Counter Here (${currentItemTotal} Items)`);
}
