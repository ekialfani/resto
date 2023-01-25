import '../../../styles/hero.css';

class HeroElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = (`
      <picture>
        <source media="(max-width: 600px)" type="image/webp" srcset="./images/hero/hero-small.webp">
        <source media="(max-width: 600px)" srcset="./images/hero/hero-small.jpg">
        <source type="image/webp" srcset="./images/hero/hero.webp">
        <img class="lazyload hero-image" data-src="./images/hero/hero-large.jpg" alt="best restaurant">
      </picture>
      <div class="hero-inner">
        <h2 class="hero-title">explore your <span>best restaurant</span></h2>
        <p class="hero-tagline">Here you can explore a wide range of five-star quality restaurants at street prices. so you can enjoy your favorite food without fear of running out of funds.</p>
      </div>
    `);
  }
}

customElements.define('hero-element', HeroElement);
