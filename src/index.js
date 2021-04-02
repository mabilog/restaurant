import { navbar } from './modules/navbar.js';
import { home } from './modules/home.js';
import { menu as food } from './modules/menu.js';
import { services } from './modules/services.js';
import { footer } from './modules/footer.js';

const menu = document.querySelector('#mobile-menu');
const menuLink = document.querySelector('.navbar__menu');

menu.addEventListener('click', function () {
  menu.classList.toggle('is-active');
  menuLink.classList.toggle('active');
})


const tabs = document.querySelectorAll('.navbar__item');
const tabContents = document.querySelectorAll('[data-tab-content]');
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // const target = tab.dataset.tabTarget;
    // console.log(tab.classList);
    // tabContents.forEach(tabContent => {
    //   tabContent.classList.remove('active');
    // })
    // tab.classList.add('active');
    // console.log(target);
    // // console.log(target);

    // // const target = document.querySelector(tab.dataset.tabTarget);
    // // console.log(tab.classList);
    // // tab.classList.add('test');
    // // console.log(tab.classList);
    // // console.log(tab.dataset.tabTarget)
    console.log(tabContents)
    console.log(tabContents.classList);
  })
})