const hero = (() => {
  const content = document.querySelector('#content');
  const hero = document.createElement('div');
  hero.setAttribute('class', 'main');
  hero.innerHTML = `
    <div class="main__container">
      <div class="main__content">
        <h1>NEXT GENERATION</h1>
        <h2>TECHNOLOGY</h2>
        <p>See what makes us different</p>
        <button class="main__btn"><a href="/index.html">Get Started</a></button>
      </div>
      <div class="main__img--container">
        <img src="../images/pic1.svg" alt="messages" id="main__img">
      </div>
    </div>
  `;

  content.appendChild(hero);
})();

export { hero };