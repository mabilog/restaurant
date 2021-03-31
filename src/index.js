import { navbar } from './navbar.js';
import { hero } from './hero.js';
import { services } from './services.js';
import { footer } from './footer.js';

const menu = document.querySelector('#mobile-menu');
const menuLink = document.querySelector('.navbar__menu');

menu.addEventListener('click', function () {
  menu.classList.toggle('is-active');
  menuLink.classList.toggle('active');
})

console.log('hello?')