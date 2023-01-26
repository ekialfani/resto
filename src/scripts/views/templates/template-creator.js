import CONFIG from '../../globals/config';

const createRestaurantDetailsTemplate = (restaurant) => {
  const {
    name, city, address, rating, pictureId, description,
  } = restaurant;

  return (`
    <img class="lazyload poster" data-src="${CONFIG.BASE_IMAGE_URL + pictureId}" alt="${name}">
    <article class="detail-inner">
      <h2 class="title" id="main-content" tabindex="0">${name}</h2>
      <div class="info">
        <div class="rating">
          <span>${rating}</span>
          <i class="fa fa-star" aria-hidden="true"></i>
        </div>
        <div class="address">
          <i class="fa fa-map-marker" aria-hidden="true"></i>
          <span>${address}, ${city}</span>
        </div>
      </div>
      <div class="description">
        <strong>Description:</strong>
        <span>${description}</span>
      </div>
    </article>
  `);
};

const createLikeButtonTemplate = () => (`
  <button aria-label="like this restaurant" id="like-button" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`);

const createUnlikeButtonTemplate = () => (`
  <button aria-label="unlike this restaurant" id="like-button" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`);

const createDrawerShowButtonTemplate = () => (`
  <button id="hamburger-button" class="hamburger-button" aria-label="show navigation list menu">
    <i class="fa fa-bars" aria-hidden="true"></i>
  </button>
`);

const createDrawerHideButtonTemplate = () => (`
  <button id="hamburger-button" class="hamburger-button" aria-label="hide navigation list menu">
    <i class="fa fa-times" aria-hidden="true"></i>
  </button>
`);

const createRestaurantMenuTemplate = (menus) => {
  const { foods, drinks } = menus;

  return (`
    <ul class="menus">
      <h3 class="outlet-label">menu</h3>
      <li class="menu-item">
        <h4>foods</h4>
        <ol class="foods">
          ${foods.map((food) => `<li>${food.name}</li>`).join('')}
        </ol>
      </li>
      <li class="menu-item">
        <h4 drink-title>drinks</h4>
        <ol class="foods">
          ${drinks.map((drink) => `<li>${drink.name}</li>`).join('')}
        </ol>
      </li>
    </ul>
  `);
};

const createCustomerReviewTemplate = (customerReview) => {
  const { name, date, review } = customerReview;

  return (`
    <div class="customer-review">
      <h4 class="name">${name}</h4>
      <p class="date">${date}</p>
      <p class="review">${review}</p>
    </div>
  `);
};

const createAddNewReviewTemplate = () => (`
  <div class="add-new-review">
    <div class="review-content">
      <h4 class="review-label">leave a review</h4>
      <p class="review-description">How was your experience?</p>
    </div>
    <button id="add-review-button" class="add-review-button">give review</button>
    <div class="review-form-container">
      <form id="review-form" class="review-form form-hide">
        <h4 class="form-title">How was your experience?</h4>
        <div class="form-group">
          <label for="customer-name">name</label>
          <input name="customer-name" id="customer-name" type="text" placeholder="input your name" autocomplete="off"/>
        </div>
        <div class="form-group">
          <label for="customer-review">review</label>
          <textarea id="customer-review" name="customer-review" aria-label="input your review" placeholder="input your review"></textarea>
        </div>
        <button type="submit" id="submit-button" class="submit-button">post review</button>
        <button id="close-button" class="close-button" aria-label="close the review form">
          <i class="fa fa-times-circle" aria-hidden="true"></i>
        </button>
      </form>
    </div>
  </div>
`);

export {
  createRestaurantDetailsTemplate,
  createLikeButtonTemplate,
  createUnlikeButtonTemplate,
  createDrawerShowButtonTemplate,
  createDrawerHideButtonTemplate,
  createRestaurantMenuTemplate,
  createAddNewReviewTemplate,
  createCustomerReviewTemplate,
};
