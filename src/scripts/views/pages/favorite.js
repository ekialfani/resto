import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import '../components/restaurant-item';
import '../components/loading-indicator';

const Favorite = {
  async render() {
    return (`
      <div id="content">
        <h3 id="main-content" tabindex="0" class="content-label favorite">Favorite Restaurant</h3>
        <section id="restaurants" class="restaurants"></section>
      </div>
    `);
  },

  async afterRender() {
    const restaurantsContainer = document.querySelector('#restaurants');
    const loadingIndicator = document.createElement('loading-indicator');

    restaurantsContainer.innerHTML = '';
    restaurantsContainer.append(loadingIndicator);

    const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();

    if (restaurants.length) {
      restaurantsContainer.innerHTML = '';

      restaurants.forEach((restaurant) => {
        const restaurantItem = document.createElement('restaurant-item');
        restaurantItem.restaurant = restaurant;
        restaurantsContainer.append(restaurantItem);
      });
    } else {
      restaurantsContainer.innerHTML = '<p class="empty-message">No restaurant to like yet</p>';
    }
  },
};

export default Favorite;
