document.addEventListener('DOMContentLoaded', (event) => {
  const orderContainer = document.getElementById('order-container');

  orderContainer.addEventListener('click', function(event) {
    if (event.target.matches('#confirm-10')) {
      event.preventDefault();
      alert('BUTTON TEST - CONFIRMED 10 MINUTES');
    } else if (event.target.matches('#confirm-20')) {
      event.preventDefault();
      alert('BUTTON TEST - CONFIRMED 10 MINUTES');
    } else if (event.target.matches('#confirm-30')) {
      event.preventDefault();
      alert('BUTTON TEST - CONFIRMED 10 MINUTES');
    }
  });
});

// This allows the buttons to function even though they are created by a function. This is looking for the confirm buttons inside the 'order-container' where the createOrder function puts them.
