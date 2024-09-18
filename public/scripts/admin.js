$(document).ready(() => {
  const $orderContainer = $('#order-container');

  const createOrder = (order) => {
    return $(`
    <div class="order">
      <div class="order-header">
        <h3>${order.name}</h3>
        <p>Order ID: ${order.id}</p>
      </div>
      <div class="order-body">
        <p>User ID: ${order.user_id}</p>
        <p>Order Date: ${new Date(order.order_date).toLocaleString()}</p>
        <p>Quantity: ${order.quantity}</p>
        <p>Status: ${order.status}</p>
        <p>Phone Number: ${order.phone_number}</p>
        <p>Price: $${order.price / 100}</p>
        <p>Description: ${order.description}</p>
      </div>
      <div class="order-footer">
        <img src="${order.image}" alt="${order.name}" style="width: 100px; height: auto;">
        <p>Total Price: $${order.total_price / 100}</p>
      </div>
    </div>
  `);
  };

  const renderOrders = (arrayOfOrders) => {
    console.log('Rendering orders:', arrayOfOrders);
    for (const order of arrayOfOrders) {
      const $order = createOrder(order);
      $orderContainer.prepend($order);
    }
  };

  const loadOrders = function() {
    $.ajax({
      method: 'GET',
      url: '/api/orders',
      success: (serverResponseOrders) => {
        console.log('Orders loaded:', serverResponseOrders);
        $orderContainer.empty();
        renderOrders(serverResponseOrders.orders);
      },
      error: (jqXHR, textStatus, errorThrown) => {
        console.error('Error loading orders:', textStatus, errorThrown);
      }
    });
  };

  loadOrders();
});
