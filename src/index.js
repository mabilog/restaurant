import footer from './modules/footer.js';
import hero from './modules/hero.js';
import navbar from './modules/navbar.js';
import services from './modules/services.js';

// const content = document.querySelector('#content');
function menuToggle() {

}
const menu = document.querySelector('#mobile-menu');
const menuLink = document.querySelector('.navbar__menu');

menu.addEventListener('click', function () {
  menu.classList.toggle('is-active');
  menuLink.classList.toggle('active');
})
function init() {
  navbar();
  hero();
  services();
  footer();
  menuToggle();
}
init();

console.log('hello?')