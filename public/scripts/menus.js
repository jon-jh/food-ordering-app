// Client facing scripts here
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
