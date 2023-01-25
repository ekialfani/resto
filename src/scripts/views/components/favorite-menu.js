import '../../../styles/favorite-menu.css';

class FavoriteMenu extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = (`
      <h3 class="content-label favorite-label">favorite menu</h3>
      <section class="favorite-list" aria-label="favorite menu">
        <div class="favorite-item">
          <picture>
            <source type="image/webp" srcset="./images/foods/hamburger.webp">
            <source type="image/jpeg" srcset="./images/foods/hamburger.jpg">
            <img class="lazyload" data-src="./images/foods/hamburger.jpg" alt="hamburger">
          </picture>
          <h4 class="favorite-title">hamburger</h4>
        </div>
        <div class="favorite-item">
          <picture>
            <source type="image/webp" srcset="./images/foods/pizza.webp">
            <source type="image/jpeg" srcset="./images/foods/pizza.jpg">
            <img class="lazyload" data-src="./images/foods/pizza.jpg" alt="pizza">
          </picture>
          <h4 class="favorite-title">pizza</h4>
        </div>
        <div class="favorite-item">
          <picture>
            <source type="image/webp" srcset="./images/foods/fruit-juice.webp">
            <source type="image/jpeg" srcset="./images/foods/fruit-juice.jpg">
            <img class="lazyload" data-src="./images/foods/fruit-juice.jpg" alt="fruit juice">
          </picture>
          <h4 class="favorite-title">fruit juice</h4>
        </div>
      </section>
    `);
  }
}

customElements.define('favorite-menu', FavoriteMenu);
