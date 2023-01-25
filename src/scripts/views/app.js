/* eslint-disable no-underscore-dangle */
import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';
import HeaderInitiator from '../utils/header-initiator';

class App {
  constructor({
    header, hamburgerMenu, drawer, navigations, main,
  }) {
    this._header = header;
    this._hamburgerMenu = hamburgerMenu;
    this._drawer = drawer;
    this._navigations = navigations;
    this._main = main;

    this._initialAppShell();
  }

  _initialAppShell() {
    HeaderInitiator.init({
      header: this._header,
      navigations: this._navigations,
    });

    DrawerInitiator.init({
      hamburgerMenu: this._hamburgerMenu,
      drawer: this._drawer,
      navigations: this._navigations,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._main.innerHTML = await page.render();
    await page.afterRender();

    const skipLinkElement = document.querySelector('.skip-link');
    skipLinkElement.addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelector('#main-content').focus();
    });
  }
}

export default App;
