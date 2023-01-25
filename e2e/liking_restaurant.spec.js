/* eslint-disable no-undef */
Feature('liking restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.see('No restaurant to like yet', '.empty-message');
});

Scenario('liking one restaurant', ({ I }) => {
  I.see('No restaurant to like yet', '.empty-message');
  I.amOnPage('/');
  I.waitForElement('.restaurant-item .title a', 10);
  I.seeElement('.restaurant-item .title a');
  I.click(locate('.restaurant-item .title a').first());
  I.waitForElement('#like-button', 10);
  I.seeElement('#like-button');
  I.click('#like-button');
  I.amOnPage('/#/favorite');
  I.waitForElement('restaurant-item', 10);
  I.seeElement('restaurant-item');
});

Scenario('disliking one restaurant', ({ I }) => {
  I.see('No restaurant to like yet', '.empty-message');
  I.amOnPage('/');

  I.waitForElement('.restaurant-item .title a', 10);
  I.seeElement('.restaurant-item .title a', 10);

  const restaurantItem = locate('.restaurant-item .title a');
  I.click(restaurantItem);

  I.waitForElement('[aria-label="like this restaurant"]', 10);
  I.seeElement('[aria-label="like this restaurant"]');
  I.click('[aria-label="like this restaurant"]');

  I.amOnPage('/#/favorite');
  I.waitForElement('restaurant-item', 10);
  I.seeElement('restaurant-item');
  I.click(restaurantItem);

  I.waitForElement('[aria-label="unlike this restaurant"]');
  I.click('[aria-label="unlike this restaurant"]');

  I.amOnPage('/#/favorite');
  I.waitForElement('.empty-message', 10);
  I.see('No restaurant to like yet', '.empty-message');
});
