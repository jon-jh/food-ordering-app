// Client facing scripts here



const renderMenus = function () {
  $(() => {
    const createMenuBox = function (menu){
      const {id, name, price, description, image} = menu;
      let $menu = `
      <div class="food-box">
        <div class="header">
          <label for="food-box-label">${name} <br> $${price/100}</label>
        </div>
        <div class="content" >
        <img src = ${image} alt = ${description}>
        </div>
        <footer class="footer">
          <button type="button" id="decrement-btn">-</button>
          <span id="counter-value">0</span>
          <button type="button" id="increment-btn">+</button>
        </footer>
      </div>
      `
      return $menu;
    }
      $.ajax({
        method: 'GET',
        url: '/api/menus'
      })
      .done((response) => {
        //console.log(response.menus);
        response.menus.forEach(m => {
          $('#menu_container').append(createMenuBox(m));
        } )
      })
      .fail(() => {
        alert('Error: cannot get data from the menu json file');
      })
    });
    
}
renderMenus();
