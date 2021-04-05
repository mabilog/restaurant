import { menu } from './menu.js';
import { services } from './services.js';


const main = (() => {
  const content = document.querySelector('#content');
  const main = document.createElement('div');
  // home.setAttribute('class', 'main active');
  main.classList.add('main', 'active');
  // main.setAttribute('data-tab-content', '');
  main.innerHTML = `
    <div class="main__container">
      <div class="main__content">
        <h2>NEXT GENERATION</h2>
        <h3>TECHNOLOGY</h3>
        <p>See what makes us different</p>
        <button class="main__btn"><a href="/index.html">Get Started</a></button>
      </div>
      <div class="main__img--container">
        <img src="../images/pic1.svg" alt="messages" id="main__img">
      </div>
    </div>
  `;



  content.appendChild(main);
})();
export { main };