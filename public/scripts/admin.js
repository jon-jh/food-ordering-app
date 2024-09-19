// Client facing scripts here
/**
 * Fetches menu data from the server and renders menu items on the page.
 *
 * The function makes an AJAX GET request to the '/api/menus' endpoint to retrieve menu data.
 * Each menu item is then rendered as a food box and appended to the '#menu_container' element.
 *
 * @function
 * @name renderMenus
 *
 * @example
 * // Call the function to render menus on the page
 * renderMenus();
 *
 * @throws Will alert an error message if the AJAX request fails.
 */

//All for admin page
const $orderContainer = $("#order-container");
const createOrder = (order) => {
  return $(`
    <div class="order">
      <div class="order-header">
        <h3>${order.quantity}x ${order.name}</h3>
        <p>Order Date: ${new Date(order.order_date).toLocaleString()}</p>
        <p>Order Number: ${order.id}</p>
      </div>
      <div class="order-body">
        <p>Phone-number. ${order.phone_number}</p>
      </div>
      <div class="order-footer">
      <p>User ID: ${order.user_id}</p>
        <img src="${order.image}" alt="${
    order.name
  }" style="width: 120px; height: auto;"><p class=status>status: ${
    order.status
  }</p>
        <form class="order-form">
         <button type="submit" class= "btn btn-success" id="complete-order">Complete Order</button>
    <button type="submit" class= "btn btn-danger" id="cancel-order">Cancel Order</button>
    <button type="submit" id="confirm-10">Confirm - 10 Minutes</button>
    <button type="submit" id="confirm-20">Confirm - 20 Minutes</button>
    <button type="submit" id="confirm-30">Confirm - 30 Minutes</button>
    <button type="submit"  id="complete-order">Complete Order</button>
    <button type="submit"  id="cancel-order">Cancel Order</button>
    </form>
      </div>
    </div>
  `);
};

const renderOrders = (arrayOfOrders) => {
  let $order;
  console.log("Rendering pending orders: ");
  for (const order of arrayOfOrders) {
    if (order.status === "pending") {
      $order = createOrder(order);
      $orderContainer.prepend($order);
    }
  }

  console.log("Rendering processing orders: ");
  for (const order of arrayOfOrders) {
    if (order.status === "processing") {
      $order = createOrder(order);
      $orderContainer.prepend($order);
    }
  }
};
const loadOrders = function () {
  $.ajax({
    method: "GET",
    url: "/api/orders",
    success: (serverResponseOrders) => {
      console.log("Orders loaded:", serverResponseOrders);
      $orderContainer.empty();
      renderOrders(serverResponseOrders.orders);
    },
    error: (jqXHR, textStatus, errorThrown) => {
      console.error("Error loading orders:", textStatus, errorThrown);
    },
  });
};

loadOrders();
