function hero() {
  const content = document.querySelector('#content');
  const mainContainer = document.createElement('div');
  const mainContent = document.createElement('div');
  const hOne = document.createElement('h1');
  const hTwo = document.createElement('h2');
  const pTag = document.createElement('p');
  const button = document.createElement('button');
  const aTag = document.createElement('a');
  const mainImg = document.createElement('div');
  const img = document.createElement('img');

  hOne.textContent = 'NEXT GENERATION';
  hTwo.textContent = 'TECHNOLOGY';
  pTag.textContent = 'See what makes us different';
  aTag.textContent = 'Get Started';

  img.src = '../images/pic1.svg';
  img.alt = 'messages';
  img.id = "main__img";
  mainImg.classList.add('main__img--container');
  mainImg.append(img);

  button.append(aTag);
  mainContent.append(hOne, hTwo, pTag, button, mainImg);
  mainContainer.append(mainContent);
  content.appendChild(mainContainer);
}

export default hero;