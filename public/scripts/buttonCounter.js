// This code updates the 'item counter' in the nav bar, the items in the review order list, and the numbers in the food boxes.

$(document).ready(function() {
  const menuContainer = $("#menu_container");
  const selectedItems = {};

  function handleIncrement() {
    const $button = $(this);
    const foodBox = $button.closest(".food-box");
    const counter = foodBox.find("#counter-value");
    let currentVal = parseInt(counter.text()) || 0;

    currentVal += 1;
    counter.text(currentVal);

    updateSelectedItems(foodBox, currentVal);
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

    updateSelectedItems(foodBox, currentVal);
  }

  function updateSelectedItems(foodBox, quantity) {
    const foodName = foodBox.find('label').text().trim();
    if (quantity > 0) {
      selectedItems[foodName] = quantity;
    } else {
      delete selectedItems[foodName];
    }
    updateCartCounter();
  }

  function updateCartCounter() {
    const totalItems = Object.values(selectedItems).reduce((sum, quantity) => sum + quantity, 0);
    $("cartCounter").text(`${totalItems} Items`);
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
});
