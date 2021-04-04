import { navbar } from './modules/navbar.js';
import { main } from './modules/main.js';
import { footer } from './modules/footer.js';

const menu = document.querySelector('#mobile-menu');
const menuLink = document.querySelector('.navbar__menu');

menu.addEventListener('click', function () {
  menu.classList.toggle('is-active');
  menuLink.classList.toggle('active');
})


const tabs = document.querySelectorAll('.navbar__item');
const tabContents = document.querySelectorAll('.thing');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget);
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active');
    })
    target.classList.add('active');
    // console.log(target)
  })
})
