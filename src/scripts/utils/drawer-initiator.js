/* eslint-disable no-underscore-dangle */
import { createDrawerShowButtonTemplate, createDrawerHideButtonTemplate } from '../views/templates/template-creator';

const DrawerInitiator = {
  init({ hamburgerMenu, drawer, navigations }) {
    this._hamburgerMenu = hamburgerMenu;
    this._drawer = drawer;
    this._navigations = navigations;

    this._renderButton();

    this._navigations.forEach((navigation) => {
      navigation.addEventListener('click', (event) => {
        this._hideDrawer(event);
        this._renderButton();
      });
    });
  },

  _renderButton() {
    if (this._isDrawerDisplayed()) {
      this._drawerHideButton();
    } else {
      this._drawerShowButton();
    }
  },

  _isDrawerDisplayed() {
    return this._drawer.classList.contains('open');
  },

  _drawerShowButton() {
    this._hamburgerMenu.innerHTML = createDrawerShowButtonTemplate();

    const hamburgerButton = document.querySelector('#hamburger-button');
    hamburgerButton.addEventListener('click', (event) => {
      this._showDrawer(event);
      this._renderButton();
    });
  },

  _drawerHideButton() {
    this._hamburgerMenu.innerHTML = createDrawerHideButtonTemplate();

    const hamburgerButton = document.querySelector('#hamburger-button');
    hamburgerButton.addEventListener('click', (event) => {
      this._hideDrawer(event);
      this._renderButton();
    });
  },

  _showDrawer(event) {
    event.stopPropagation();
    this._drawer.classList.replace('close', 'open');
  },

  _hideDrawer(event) {
    event.stopPropagation();
    this._drawer.classList.replace('open', 'close');
  },
};

export default DrawerInitiator;
