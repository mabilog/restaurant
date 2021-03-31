function services() {
  const content = document.querySelector('#content');
  const services = document.createElement('div');
  const hOne = document.createElement('h1');
  const servContainer = document.createElement('div');
  const cardOne = document.createElement('div');
  const experience = document.createElement('h2');
  const power = document.createElement('p');
  const btnOne = document.createElement('button');
  const cardTwo = document.createElement('div');
  const ready = document.createElement('h2');
  const leap = document.createElement('p');
  const btnTwo = document.createElement('button');

  services.classList.add('services');
  servContainer.classList.add('services__container');

  hOne.textContent = 'See what the hype is about';

  experience.textContent = 'Experience Bliss';
  power.textContent = 'AI Powered Technology';
  btnOne.textContent = 'Get Started';
  cardOne.classList.add('services__card');
  cardOne.append(experience, power, btnOne);

  ready.textContent = 'Are you Ready?';
  leap.textContent = 'Take the leap';
  btnTwo.textContent = 'Get Started';
  cardTwo.classList.add('services__card');
  cardTwo.append(ready, leap, btnTwo);

  servContainer.append(cardOne, cardTwo);
  services.append(hOne, servContainer);
  content.append(services);
}

module.exports.services;