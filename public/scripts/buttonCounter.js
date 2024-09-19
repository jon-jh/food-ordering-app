$(document).ready(function() {
  let currentVal = parseInt($("#counter-value").val(), 10);
  console.log('Value not number:', $("#counter-value").val());
  console.log('Initial current value:', currentVal);

  function updateCounter() {
      $("#counter-value").text(currentVal);
      console.log('Updated current value:', currentVal);
  }

  $("#decrement-btn").on('click', function() {
      if (currentVal > 0) {
          currentVal -= 1;
          updateCounter();
      }
  });

  $("#increment-btn").on('click', function() {
      currentVal += 1;
      updateCounter();
  });
});