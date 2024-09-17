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
        alert('Error: cannot get data from the menus json api.');
      })
    });
    
}
renderMenus();
