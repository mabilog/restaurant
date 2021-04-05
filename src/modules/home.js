const home = (() => {
  //home container
  const homeContainer = document.createElement('div');
  homeContainer.classList.add('home__container', 'tab', 'active');

  //home content
  const homeContent = document.createElement('div');
  homeContent.classList.add('home__content');

  //title
  const title = document.createElement('h2');
  title.innerHTML = `KAZU RESTAURANT`;

  //description 
  const desc = document.createElement('h3');
  desc.innerHTML = `ORDER NOW`;

  //paragraph
  const para = document.createElement('p');
  para.innerHTML = `Japanese Fusion`;

  //button
  const btn = document.createElement('button');
  btn.classList.add('home__btn');

  // Get Stared link to append into button
  const link = document.createElement('a');
  link.href = '/index.html';
  link.innerHTML = `Get Started`;
  btn.appendChild(link);

  // home image container
  const homeImg = document.createElement('home__img--container');
  const img = document.createElement('img');
  img.src = '../images/pic1.svg';
  img.alt = 'message';
  img.id = 'home__img';


  homeContent.appendChild(title, desc, btn);
  homeImg.appendChild(img);
  homeContainer.appendChild(homeContent, homeImg);
})();

export { home };