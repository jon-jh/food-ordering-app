$(document).ready(function() {
const reviewWindow = document.getElementById("reviewPopup");
const changesBtn = document.getElementById("makeChangesBtn")

const span = document.getElementsByClassName("close")[0];
const confirmBtn = document.getElementById("confirmOrderBtn")

function updateSelectedItems(foodBox, quantity) {
  const foodName = foodBox.find('label').text().trim();
  if (quantity > 0) {
    selectedItems[foodName] = quantity;
  } else {
    delete selectedItems[foodName];
  }
}


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

});