import { navbar } from './modules/navbar.js';
import { home } from './modules/home.js';
import { services } from './modules/services.js';
import { footer } from './modules/footer.js';

const menu = document.querySelector('#mobile-menu');
const menuLink = document.querySelector('.navbar__menu');

menu.addEventListener('click', function () {
  menu.classList.toggle('is-active');
  menuLink.classList.toggle('active');
})


const tabs = document.querySelectorAll('[data-tag-target]');
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget);
    target.classList.add('active');
  })
})