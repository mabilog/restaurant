const menu = (() => {
  const content = document.querySelector("#content");
  const menu = document.createElement('div');
  menu.setAttribute('class', 'menu');
  menu.setAttribute('id', "menu");
  menu.setAttribute('data-tab-content', '');
  menu.innerHTML = ` 
  
    <div class="menu__container">
      <h2>Whats on the menu!</h2>
      <h3>Kazu</h3>
      <p>This is what we have on the menu</p>
      <div class="kazu-logo">
        <img src="../images/kazu-logo.png" alt="kazu-logo" id="kazu__img">
      </div>
    </div>

  `;
  content.appendChild(menu);
})();

export { menu };