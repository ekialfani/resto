/* eslint-disable no-underscore-dangle */
import UrlParser from '../routes/url-parser';

const HeaderInitiator = {
  init({ header, navigations }) {
    this._header = header;
    this._navigations = navigations;

    this._initialEvent();
  },

  _initialEvent() {
    this._navigations.forEach((navigation) => {
      navigation.addEventListener('click', () => {
        this._makeAllNavigationInactive();
        this._makeClickedNavigationActive(navigation);
      });
    });

    window.addEventListener('scroll', () => {
      if (this._pageOnScrolls()) {
        this._addTheShadowOnTheHeader();
      }

      if (this._pageNotScroll()) {
        this._removeTheShadowOnTheHeader();
      }
    });

    window.addEventListener('hashchange', () => {
      if (this._currentPageIsRoot()) {
        this._changeTheHeaderBackgroundColorToTransparent();
        return;
      }

      this._changeTheHeaderBackgroundColorToOrange();
    });

    window.addEventListener('load', () => {
      if (this._currentPageIsRoot()) {
        this._changeTheHeaderBackgroundColorToTransparent();
        return;
      }

      this._changeTheHeaderBackgroundColorToOrange();
    });
  },

  _pageOnScrolls() {
    return (window.scrollY > 10);
  },

  _pageNotScroll() {
    return (window.scrollY === 0);
  },

  _currentPageIsRoot() {
    const page = UrlParser.parseActiveUrlWithCombiner();
    return (page === '/');
  },

  _makeAllNavigationInactive() {
    this._navigations.forEach((navigation) => navigation.classList.remove('active'));
  },

  _makeClickedNavigationActive(navigation) {
    navigation.classList.add('active');
  },

  _addTheShadowOnTheHeader() {
    this._header.classList.add('shadow');
  },

  _removeTheShadowOnTheHeader() {
    this._header.classList.remove('shadow');
  },

  _changeTheHeaderBackgroundColorToOrange() {
    this._header.classList.add('bg-orange');
  },

  _changeTheHeaderBackgroundColorToTransparent() {
    this._header.classList.remove('bg-orange');
  },
};

export default HeaderInitiator;
