const footer = (() => {
  const content = document.querySelector('#content');
  const footer = document.createElement('div');
  footer.setAttribute('class', 'footer__container');
  footer.innerHTML = `
    <div class="footer__links">
      <div class="footer__link--wrapper">
        <div class="footer__link--items">
          <h2>About Us</h2>
          <a href="/index.html">How it works</a>
          <a href="/index.html">Testimonials</a>
          <a href="/index.html">Careers</a>
          <a href="/index.html">Investments</a>
          <a href="/index.html">Terms of Service</a>
        </div>
        <div class="footer__link--items">
          <h2>Contact Us</h2>
          <a href="/index.html">Contact</a>
          <a href="/index.html">Support</a>
          <a href="/index.html">Destinations</a>
          <a href="/index.html">Sponsorships</a>
        </div>
        <div class="footer__link--items">
          <h2>Videos</h2>
          <a href="/index.html">Submit Video</a>
          <a href="/index.html">Ambassadors</a>
          <a href="/index.html">Agency</a>
          <a href="/index.html">Influencer</a>
        </div>
        <div class="footer__link--items">
          <h2>Social Media</h2>
          <a href="/index.html">Instagram</a>
          <a href="/index.html">Facebook</a>
          <a href="/index.html">Youtube</a>
          <a href="/index.html">Twitter</a>
        </div>
      </div>
      </div>
      <div class="social__media">
        <div class="social__media--wrap">
          <div class="footer__logo">
            <a href="/index.html" id="footer__logo"><i class="fas fa-gem"></i>NEXT</a>
          </div>
          <p class="website__right">© NEXT 2020. All rights reserved</p>
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