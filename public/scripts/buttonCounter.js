$(document).ready(function () {
  //console.log("Making sure it is on this line ->");
  const menuContainer = $("#menu_container");

  //console.log("Menu container:", menuContainer);

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
});
