const menu = (() => {
  const content = document.querySelector("#content");
  const menu = document.createElement('div');
  menu.setAttribute('class', 'menu');
  menu.innerHTML = ` 
  
    <div class="main menu__container active" data-tab-content>
      <h2>Whats on the menu!</h2>
      <h3>Kazu</h3>
      <p>This is what we have on the menu</p>
      <div class="kazu-logo">
        <img src="../images/kazu-logo.png" alt="kazu-logo" id="kazu__img">
      </div>
    </div>

  `;
  console.log('boom boom');
  content.appendChild(menu);
})();

export { menu };