/* eslint-disable no-underscore-dangle */
import '../../../styles/restaurant-item.css';
import CONFIG from '../../globals/config';

class RestaurantItem extends HTMLElement {
  /**
   * @param {any} restaurant
   */
  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  render() {
    const {
      id, name, pictureId, city, rating, description,
    } = this._restaurant;

    this.innerHTML = (`
      <article class="restaurant-item">
        <a href="/#/detail/${id}" class="restaurant-thumb" aria-label="${name}, ${city}. Rating ${rating}">
          <img class="lazyload" data-src="${CONFIG.BASE_IMAGE_URL + pictureId}" alt="${name}">  
        </a>
        <div class="restaurant-content">
          <span class="city">${city}</span>
          <div class="rating">
            <span>rating: ${rating}</span>
            <i class="fa fa-star" aria-hidden="true"></i>
          </div>
          <h4 class="title">
            <a href="/#/detail/${id}">${name}</a>
          </h4>
          <p class="description">${description}</p>
        </div>
      </article>
    `);
  }
}

customElements.define('restaurant-item', RestaurantItem);
