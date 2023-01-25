import RestaurantDBSource from '../../data/restaurant-db-source';
import '../components/restaurant-item';
import '../components/loading-indicator';
import '../components/favorite-menu';
import '../components/hero-element';
import '../components/error-message';

const Home = {
  async render() {
    return (`
      <hero-element></hero-element>
      <div id="content">
        <favorite-menu></favorite-menu>
        <section class="explore">
          <h3 id="main-content" class="content-label" tabindex="0">explore restaurant</h3>
          <section id="restaurants" class="restaurants"></section>
        </section>
      </div>
    `);
  },

  async afterRender() {
    const restaurantsContainer = document.querySelector('#restaurants');
    const loadingIndicator = document.createElement('loading-indicator');

    restaurantsContainer.innerHTML = '';
    restaurantsContainer.append(loadingIndicator);

    try {
      restaurantsContainer.innerHTML = '';
      const restaurants = await RestaurantDBSource.getAllRestaurant();

      restaurants.forEach((restaurant) => {
        const restaurantItem = document.createElement('restaurant-item');
        restaurantItem.restaurant = restaurant;
        restaurantsContainer.append(restaurantItem);
      });
    } catch (message) {
      const errorMessage = document.createElement('error-message');
      errorMessage.message = message;

      restaurantsContainer.innerHTML = '';
      restaurantsContainer.append(errorMessage);
    }
  },
};

export default Home;
