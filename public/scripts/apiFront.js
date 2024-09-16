/**
 * Initializes the client-side script for fetching and displaying users.
 * 
 * When the document is ready, this script sets up an event listener on the 
 * element with the ID 'fetch-users'. When this element is clicked, an AJAX 
 * GET request is sent to the '/api/users' endpoint. Upon a successful response, 
 * the list of users is displayed in the element with the ID 'users'.
 * 
 * @function
 * @name fetchAndDisplayUsers
 * @event click - Triggered when the element with ID 'fetch-users' is clicked.
 * @returns {void}
 */
// Client facing scripts here
$(() => {
  $('#fetch-users').on('click', () => {
    $.ajax({
      method: 'GET',
      url: '/api/users'
    })
    .done((response) => {
      const $usersList = $('#users');
      $usersList.empty();

      for(const user of response.users) {
        $(`<li class="user">`).text(user.name).appendTo($usersList);
      }
    });
  });
});
$(() => {
  $('#fetch-menus').on('click', () => {
    $.ajax({
      method: 'GET',
      url: '/api/menus'
    })
    .done((response) => {
      const $menusList = $('#menus');
      $menusList.empty();

      for(const menu of response.menus) {
        $(`<li class="menus">`).text(`${menu.id} |  ${menu.name} |  $${menu.price/100} | ${menu.description} `).appendTo($menusList);
      }
    });
  });
});