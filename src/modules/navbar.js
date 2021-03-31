function navbar() {
  const content = document.querySelector('#content');
  const navbar = document.createElement('nav');
  const container = document.createElement('div');
  const logo = document.createElement('a');
  const i = document.createElement('i');

  const toggle = document.createElement('div');
  const bar1 = document.createElement('span');
  const bar2 = document.createElement('span');
  const bar3 = document.createElement('span');

  const menu = document.createElement('ul');
  const item1 = document.createElement('li');
  const item2 = document.createElement('li');
  const item3 = document.createElement('li');
  const item4 = document.createElement('li');
  const item5 = document.createElement('li');
  const btn = document.createElement('li');
  const item1Link = document.createElement('a');
  const item2Link = document.createElement('a');
  const item3Link = document.createElement('a');
  const item4Link = document.createElement('a');
  const item5Link = document.createElement('a');
  const btnLink = document.createElement('a');

  item1.classList.add('navbar__item');
  item2.classList.add('navbar__item');
  item3.classList.add('navbar__item');
  item4.classList.add('navbar__item');
  item5.classList.add('navbar__item');
  btn.classList.add('navbar__btn');

  item1Link.classList.add('navbar__links');
  item2Link.classList.add('navbar__links');
  item3Link.classList.add('navbar__links');
  item4Link.classList.add('navbar__links');
  item5Link.classList.add('navbar__links');
  btnLink.classList.add('button');

  item1Link.textContent = 'Home';
  item2Link.textContent = 'Menu';
  item3Link.textContent = 'Chef';
  item4Link.textContent = 'Reservation';
  item5Link.textContent = 'Loacation';
  btnLink.textContent = 'Sign Up';


  navbar.classList.add('navbar__container');
  logo.id = 'navbar__logo';
  i.classList.add('fas', 'fa-gem');
  logo.textContent = 'NEXT';
  toggle.classList.add('navbar__toggle');
  toggle.id = 'mobile-menu';

  bar1.classList.add('bar');
  bar2.classList.add('bar');
  bar3.classList.add('bar');


  toggle.append(bar1, bar2, bar3);

  item1.append(item1Link);
  item2.append(item2Link);
  item3.append(item3Link);
  item4.append(item4Link);
  item5.append(item5Link);
  btn.append(btnLink);

  logo.append(i);
  menu.append(item1, item2, item3, item4, item5, btn);
  container.append(logo, menu);
  navbar.append(container);
  content.append(navbar);
}

module.exports.navbar;