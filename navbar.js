const navbar = (() => {
  const content = document.querySelector('#content');
  const nav = document.createElement('nav');

  nav.setAttribute("class", 'navbar');
  nav.innerHTML = `
    <div class="navbar__container">
      <a href="./index.html" id="navbar__logo"><i class="fas fa-gem"></i> NEXT</a>
      <div class="navbar__toggle" id="mobile-menu">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>
      <ul class="navbar__menu">
        <li class="navbar__item" data-tab-target>
          <p class="navbar__links tab" data-tab-target=".home">Home</p>
        </li>
        <li class="navbar__item" data-tab-target>
          <p class="navbar__links tab" data-tab-target=".menu">Menu</p>
        </li>
        <li class="navbar__item" data-tab-target>
          <p class="navbar__links tab" data-tab-target=".chef"> Chef</a>
        </li>
        <li class="navbar__item" data-tab-target>
          <p class="navbar__links tab" data-tab-target=".reservation">Reservation</p>
        </li>
        <li class="navbar__item " data-tab-target>
          <p class="navbar__links tab" data-tab-target=".location">Location</p>
        </li>
        <li class="navbar__btn">
          <p class="button">Sign Up</p>
        </li>
      </ul>
    </div>
  `;
  content.appendChild(nav);
})();

export { navbar };