const services = (() => {
  const content = document.querySelector('#content');
  const service = document.createElement('div');
  service.setAttribute('class', 'services')
  service.innerHTML = `
  <h2>See what the hype is about</h2>
  <div class="services__container">
    <div class="services__card">
      <h3>Experince Bliss</h3>
      <p>AI Powered Technology</p>
      <button>Get Started</button>
    </div>
    <div class="services__card">
      <h3>Are you Ready?</h3>
      <p>Take the leap</p>
      <button>Get Started</button>
    </div>
  </div>`;

  content.appendChild(service);
})();
export { services };