import 'regenerator-runtime'; /* for async await transpile */
import '../styles/style.css';
import '../styles/responsive.css';
import '../styles/skip-link.css';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import swRegister from './utils/sw-register';
import App from './views/app';

const app = new App({
  header: document.querySelector('header'),
  hamburgerMenu: document.querySelector('#hamburger-menu'),
  drawer: document.querySelector('#drawer'),
  navigations: document.querySelectorAll('.nav-item'),
  main: document.querySelector('main'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
