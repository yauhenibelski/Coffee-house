import Footer from './components/layout/footer/footer';
import Header from './components/layout/header/header';
import MenuPage from './pages/menu/menu';
import HomePage from './pages/home/home';

class App {
  constructor() {
    this.container = document.body;
    window.location.hash = App.currentPageID;
    window.onhashchange = () => {

    };
  }

  static currentPageID = 'home/';

  pages = {
    home: new HomePage(),
    menu: new MenuPage(),
  };

  elem = {
    header: new Header(),
    footer: new Footer(),
  };

  renderPage(id) {
    const { header } = this.elem;
    const { home, menu } = this.pages;
    const currentPage = document.getElementById(App.currentPageID.slice(0, -1));

    if (id === 'home/') {
      header.getElement().after(home.getElement());
    }
    if (id === 'menu/') {
      header.getElement().after(menu.getElement());
    }
    if (currentPage && (id !== App.currentPageID)) currentPage.remove();

    App.currentPageID = id;
    this.elem.header.render();
  }

  router() {
    window.onhashchange = () => {
      const hash = window.location.hash.slice(1);

      if (hash === 'home/') return this.renderPage(hash);
      if (hash === 'menu/') return this.renderPage(hash);

      const elem = document.getElementById(hash);
      if (elem) return;

      // eslint-disable-next-line no-unused-expressions
      App.currentPageID === 'home/'
        ? this.renderPage('menu/')
        : this.renderPage('home/');

      const selectedItem = document.getElementById(hash);
      selectedItem.scrollIntoView();
    };
  }

  run() {
    const { header, footer } = this.elem;

    this.container.append(header.getElement());
    this.container.append(footer.getElement());

    this.renderPage('home/');
    this.router();
  }
}

export default App;
