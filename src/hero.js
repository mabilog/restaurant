function hero() {
  const content = document.querySelector('#content');
  const mainContent = document.createElement('div');
  const hOne = document.createElement('h1');
  const hTwo = document.createElement('h2');
  const pTag = document.createElement('p');
  const button = document.createElement('button');
  const mainImg = document.createElement('div');
  const img = document.createElement('img');

  img.src = '../images/pic1.svg';
  img.alt = 'messages';
  img.id = "main__img";
  mainImg.classList.add('main__img--container');
  mainImg.append(img);

}

export default hero;