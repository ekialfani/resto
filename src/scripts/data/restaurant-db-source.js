/* eslint-disable no-underscore-dangle */
import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantDBSource {
  static async getAllRestaurant() {
    const response = await fetch(API_ENDPOINT.RESTAURANT_LIST);

    if (response.status !== 200) {
      return Promise.reject(response.statusText);
    }

    const responseJson = await response.json();

    if (responseJson.error) {
      return Promise.reject(response.message);
    }

    return responseJson.restaurants;
  }

  static async getDetail(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));

    if (response.status !== 200) {
      return Promise.reject(response.statusText);
    }

    const responseJson = await response.json();

    if (responseJson.error) {
      return Promise.reject(responseJson.message);
    }

    return responseJson.restaurant;
  }

  static async addNewReview(customerReview) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(customerReview),
    };

    const response = await fetch(API_ENDPOINT.ADD_NEW_REVIEW, options);

    return response;
  }
}

export default RestaurantDBSource;
