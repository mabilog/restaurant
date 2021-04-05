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
        <li class="navbar__item navbar__links tab" data-tab-target="#home">Home</li>
        <li class="navbar__item navbar__links tab" data-tab-target="#menu">Menu</li>
        <li class="navbar__item navbar__links tab" data-tab-target="#services">Services</li>
        <li class="navbar__item navbar__links tab" data-tab-target="#reservation">Reservation</li>
        <li class="navbar__item navbar__links tab" data-tab-target="#location">Location</li>
        <li class="navbar__btn">
          <p class="button">Sign Up</p>
        </li>
      </ul>
    </div>
  `;
  content.appendChild(nav);
})();

export { navbar };