const footer = (() => {
  const content = document.querySelector('#content');
  const footer = document.createElement('div');
  footer.setAttribute('class', 'footer__container');
  footer.innerHTML = `
    <div class="footer__links">
      </div>
      <div class="social__media">
        <div class="social__media--wrap">
          <div class="footer__logo">
            <a href="/index.html" id="footer__logo"><img src='../images/kazu-logo.png'> Kazu</a>
          </div>
          <p class="website__right">© KAZU 2021. All rights reserved</p>
          <div class="social__icons">
            <a href="/index.html" class="social__icon--link" target="_blank">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="/index.html" class="social__icon--link" target="_blank">
              <i class="fab fa-facebook"></i>
            </a>
            <a href="/index.html" class="social__icon--link" target="_blank">
              <i class="fab fa-youtube"></i>
            </a>
            <a href="/index.html" class="social__icon--link" target="_blank">
              <i class="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  `;

  content.appendChild(footer);
})();
export { footer };