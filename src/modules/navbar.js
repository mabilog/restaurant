const navbar = (() => {
  const content = document.querySelector('#content');
  const nav = document.createElement('nav');

  nav.setAttribute("class", 'navbar');
  nav.innerHTML = `
    <div class="navbar__container">
      <a href="./index.html" id="navbar__logo"><img src='../images/kazu-logo.png'> Kazu</a>
      <div class="navbar__toggle" id="mobile-menu">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>
      <ul class="navbar__menu">
        <li class="navbar__item navbar__links tab" data-tab-target=".home__container">Home</li>
        <li class="navbar__item navbar__links tab" data-tab-target=".menu__container">Menu</li>
      </ul>
    </div>
  `;
  content.appendChild(nav);
})();

export { navbar };