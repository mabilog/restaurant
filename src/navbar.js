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
        <li class="navbar__item">
          <a href="./index.html" class="navbar__links">Home</a>
        </li>
        <li class="navbar__item">
          <a href="./menu.html" class="navbar__links">Menu</a>
        </li>
        <li class="navbar__item">
          <a href="./index.html" class="navbar__links">Chef</a>
        </li>
        <li class="navbar__item">
          <a href="./index.html" class="navbar__links">Reservation</a>
        </li>
        <li class="navbar__item">
          <a href="./index.html" class="navbar__links">Location</a>
        </li>
        <li class="navbar__btn">
          <a href="./index.html" class="button">Sign Up</a>
        </li>
      </ul>
    </div>
  `;
  content.appendChild(nav);
})();

export { navbar };