const services = (() => {
  const content = document.querySelector('#content');
  const service = document.createElement('div');
  service.setAttribute('class', 'services')
  service.innerHTML = `
  <h1>See what the hype is about</h1>
    <div class="services__container">
      <div class="services__card">
        <h2>Experince Bliss</h2>
        <p>AI Powered Technology</p>
        <button>Get Started</button>
      </div>
      <div class="services__card">
        <h2>Are you Ready?</h2>
        <p>Take the leap</p>
        <button>Get Started</button>
      </div>
    </div>`;

  content.appendChild(service);
})();
export { services };