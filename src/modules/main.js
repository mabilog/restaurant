const main = (() => {
  /***********************************************************************  HOME TAB ***********************************************************************/
  const content = document.querySelector('#content');
  const homeContainer = document.createElement('div');
  const homeContent = document.createElement('div');
  const title = document.createElement('h2');
  const desc = document.createElement('h3');
  const para = document.createElement('p');
  const btn = document.createElement('button');
  const link = document.createElement('a');
  const homeImg = document.createElement('div');
  const img = document.createElement('img');

  // adding classes
  homeContainer.classList.add('home__container', 'thing', 'active');
  // homeContainer.id = 'home__container';
  homeContent.classList.add('home__content');
  btn.classList.add('home__btn');
  homeImg.classList.add('home__img--container');


  // home container
  title.innerHTML = `NEXT GENERATION`;
  desc.innerHTML = `TECHNOLOGY`;
  para.innerHTML = `See what makes us different`;

  // Get Stared link to append into button
  link.href = '/index.html';
  link.innerHTML = `Get Started`;


  // home image container
  img.src = '../images/pic1.svg';
  img.alt = 'message';
  img.id = 'home__img';

  btn.appendChild(link);
  homeContent.append(title, desc, btn);
  homeImg.appendChild(img);
  homeContainer.append(homeContent, homeImg);
  content.appendChild(homeContainer);

  /***********************************************************************  MENU TAB ***********************************************************************/
  // const menuContainer = document.createElement('div');
  // const menuTitle = document.createElement('h2');
  // const menuSubtitle = document.createElement('h3');
  // const menuLogo = document.createElement('div');
  // const menuImg = document.createElement('img');

  // menuContainer.classList.add('menu__container', 'thing');
  // menuLogo.classList.add('kazu-logo');

  // menuTitle.innerHTM = `What's on the menu!`;
  // menuSubtitle.innerHTML = `This is what's on the menu beech`;

  // menuImg.src = '../images/kazu-logo.png';
  // menuImg.alt = `kazu-logo`;
  // menuImg.id = 'kazu__img';

  // menuLogo.appendChild(menuImg);
  // menuContainer.append(menuTitle, menuSubtitle, menuLogo);
  // content.append(menuContainer);
  /****************************************************************  SERVICES TAB ***********************************************************/

  const menuContainer = document.createElement('div');
  menuContainer.classList.add('menu__container', 'thing');

  const menuTitle = document.createElement('h2');
  menuTitle.innerHTML = `Menu`;

  const menuCards = document.createElement('div');
  menuCards.classList.add('menu__cards');

  // Card One
  const menuCardOne = document.createElement('div');
  const cardOneTitle = document.createElement('h3');
  const cardOnePara = document.createElement('p');
  const cardOneBtn = document.createElement('button');

  menuCardOne.classList.add('menu__card');
  cardOneBtn.classList.add('menuBtn');

  cardOneTitle.innerHTML = `Experience Bliss`;
  cardOnePara.innerHTML = `AI Powered Technology`;
  cardOneBtn.innerHTML = `Get Started`;

  menuCardOne.append(cardOneTitle, cardOnePara, cardOneBtn);

  // Card Two
  const menuCardTwo = document.createElement('div');
  const cardTwoTitle = document.createElement('h3');
  const cardTwoPara = document.createElement('p');
  const cardTwoBtn = document.createElement('button');

  menuCardTwo.classList.add('menu__card');
  // cardTwoBtn.classList.add('button');
  cardTwoBtn.classList.add('serviceBtn');
  cardTwoTitle.innerHTML = `Are you Ready?`;
  cardTwoPara.innerHTML = `Take the leap`;
  cardTwoBtn.innerHTML = `Get Started`;

  menuCardTwo.append(cardTwoTitle, cardTwoPara, cardTwoBtn);
  menuCards.append(menuCardOne, menuCardTwo)
  menuContainer.append(menuTitle, menuCards);
  content.append(menuContainer);

  /****************************************************************  LOCATIONS TAB ***********************************************************/



})();
export { main };