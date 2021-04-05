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
  const menuContainer = document.createElement('div');
  const menuTitle = document.createElement('h2');
  const menuSubtitle = document.createElement('h3');
  const menuLogo = document.createElement('div');
  const menuImg = document.createElement('img');

  menuContainer.classList.add('menu__container', 'thing');
  menuLogo.classList.add('kazu-logo');

  menuTitle.innerHTM = `What's on the menu!`;
  menuSubtitle.innerHTML = `This is what's on the menu beech`;

  menuImg.src = '../images/kazu-logo.png';
  menuImg.alt = `kazu-logo`;
  menuImg.id = 'kazu__img';

  menuLogo.appendChild(menuImg);
  menuContainer.append(menuTitle, menuSubtitle, menuLogo);
  content.append(menuContainer);
  /****************************************************************  SERVICES TAB ***********************************************************/

  const servicesContainer = document.createElement('div');
  servicesContainer.classList.add('services__container', 'thing');

  const hype = document.createElement('h2');
  hype.innerHTML = `See what the hype is about`;

  const servicesCards = document.createElement('div');
  servicesCards.classList.add('services__cards');

  // Card One
  const serviceCardOne = document.createElement('div');
  const cardOneTitle = document.createElement('h3');
  const cardOnePara = document.createElement('p');
  const cardOneBtn = document.createElement('button');

  serviceCardOne.classList.add('services__card');
  cardOneBtn.classList.add('serviceBtn');

  cardOneTitle.innerHTML = `Experience Bliss`;
  cardOnePara.innerHTML = `AI Powered Technology`;
  cardOneBtn.innerHTML = `Get Started`;

  serviceCardOne.append(cardOneTitle, cardOnePara, cardOneBtn);

  // Card Two
  const serviceCardTwo = document.createElement('div');
  const cardTwoTitle = document.createElement('h3');
  const cardTwoPara = document.createElement('p');
  const cardTwoBtn = document.createElement('button');

  serviceCardTwo.classList.add('services__card');
  // cardTwoBtn.classList.add('button');
  cardTwoBtn.classList.add('serviceBtn');
  cardTwoTitle.innerHTML = `Are you Ready?`;
  cardTwoPara.innerHTML = `Take the leap`;
  cardTwoBtn.innerHTML = `Get Started`;

  serviceCardTwo.append(cardTwoTitle, cardTwoPara, cardTwoBtn);
  servicesCards.append(serviceCardOne, serviceCardTwo)
  servicesContainer.append(hype, servicesCards);
  content.append(servicesContainer);

  /****************************************************************  LOCATIONS TAB ***********************************************************/

})();
export { main };