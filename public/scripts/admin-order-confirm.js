document.addEventListener('DOMContentLoaded', (event) => {
  const orderContainer = document.getElementById('order-container');

  orderContainer.addEventListener('click', function(event) {
    if (event.target.matches('#confirm-10')) {
      event.preventDefault();
      alert('BUTTON TEST - CONFIRMED 10 MINUTES');
    } else if (event.target.matches('#confirm-20')) {
      event.preventDefault();
      alert('BUTTON TEST - CONFIRMED 20 MINUTES');
    } else if (event.target.matches('#confirm-30')) {
      event.preventDefault();
      alert('BUTTON TEST - CONFIRMED 30 MINUTES');
    }
    else if (event.target.matches('#cancel-order')){
      alert('Canceling Order')
      const data = {
        phoneNumber: 'add your phone here',
      }
      $.ajax({
        type: "POST",
        url: "/admin/cancel",
        contentType: "application/json",
        data:JSON.stringify(data),
      })
    }
    else if (event.target.matches('#complete-order')){
      alert ('Completing Order')

    }
  });
});

// This allows the buttons to function even though they are created by a function. This is looking for the confirm buttons inside the 'order-container' where the createOrder function puts them.
