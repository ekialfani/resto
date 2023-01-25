/* eslint-disable no-underscore-dangle */
import RestaurantDBSource from '../data/restaurant-db-source';
import { createRestaurantMenuTemplate, createCustomerReviewTemplate, createAddNewReviewTemplate } from '../views/templates/template-creator';
import '../views/components/error-message';

const OutletDetailInitiator = {
  init({
    outletContainer, menuButton, reviewButton, restaurant,
  }) {
    this._outletContainer = outletContainer;
    this._menuButton = menuButton;
    this._reviewButton = reviewButton;
    this._restaurant = restaurant;

    this._renderRestaurantMenu();
    this._initialEvent();
  },

  _initialEvent() {
    this._menuButton.addEventListener('click', () => {
      this._makeThePreviouslyClickedButtonInactive(this._reviewButton);
      this._makeTheClickedButtonActive(this._menuButton);
      this._renderRestaurantMenu();
    });

    this._reviewButton.addEventListener('click', async () => {
      this._makeThePreviouslyClickedButtonInactive(this._menuButton);
      this._makeTheClickedButtonActive(this._reviewButton);
      await this._renderCustomerReview();
    });
  },

  _makeTheClickedButtonActive(button) {
    button.classList.add('active-button');
  },

  _makeThePreviouslyClickedButtonInactive(button) {
    button.classList.remove('active-button');
  },

  _renderRestaurantMenu() {
    const { menus } = this._restaurant;
    this._outletContainer.innerHTML = createRestaurantMenuTemplate(menus);
  },

  async _renderCustomerReview() {
    this._outletContainer.innerHTML = '<h3 class="outlet-label">customer review</h3>';

    try {
      const customerReviews = await this._getCustomerReviews(this._restaurant.id);

      customerReviews.forEach((customerReview) => {
        this._outletContainer.innerHTML += createCustomerReviewTemplate(customerReview);
      });

      this._addNewReview();
    } catch (message) {
      const errorMessage = document.createElement('error-message');
      errorMessage.message = message;

      this._outletContainer.innerHTML = '';
      this._outletContainer.append(errorMessage);
    }
  },

  async _getCustomerReviews(id) {
    const response = await RestaurantDBSource.getDetail(id);
    return response.customerReviews;
  },

  _addNewReview() {
    this._outletContainer.innerHTML += createAddNewReviewTemplate();
    const addReviewButton = document.querySelector('#add-review-button');
    const closeButton = document.querySelector('#close-button');

    addReviewButton.addEventListener('click', () => {
      this._showReviewForm();
      this._getUserInput();
    });

    closeButton.addEventListener('click', (event) => {
      event.stopPropagation();
      event.preventDefault();
      this._hideReviewForm();
    });
  },

  _getUserInput() {
    const reviewForm = document.querySelector('#review-form');

    reviewForm.addEventListener('submit', async (event) => {
      event.stopPropagation();
      event.preventDefault();

      const userInput = {
        id: this._restaurant.id,
        customerName: document.querySelector('#customer-name').value,
        customerReview: document.querySelector('#customer-review').value,
      };

      if (this._formInputValueIsEmpty(userInput)) {
        return;
      }

      await this._updateCustomerReview(userInput);
    });
  },

  _formInputValueIsEmpty({ customerName, customerReview }) {
    return (customerName === '') || (customerReview === '');
  },

  async _updateCustomerReview({ id, customerName, customerReview }) {
    const customerReviewData = {
      id,
      name: customerName,
      review: customerReview,
    };

    const response = await RestaurantDBSource.addNewReview(customerReviewData);

    if (response.ok) {
      await this._renderCustomerReview();
    }
  },

  _showReviewForm() {
    const reviewFormContainer = document.querySelector('.review-form-container');
    const reviewForm = document.querySelector('#review-form');

    reviewFormContainer.classList.add('display-flex');
    reviewForm.classList.replace('form-hide', 'form-show');
  },

  _hideReviewForm() {
    const reviewFormContainer = document.querySelector('.review-form-container');
    const reviewForm = document.querySelector('#review-form');

    reviewForm.classList.replace('form-show', 'form-hide');

    setTimeout(() => {
      reviewFormContainer.classList.remove('display-flex');
    }, 200);

    reviewForm.reset();
  },
};

export default OutletDetailInitiator;
