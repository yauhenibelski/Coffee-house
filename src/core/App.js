import Footer from './components/layout/footer/footer';
import Header from './components/layout/header/header';
import MenuPage from './pages/menu/menu';
import HomePage from './pages/home/home';
import { routes } from './utils/routes';
import ChangeCategoryBlock from './components/layout/change-category-block/change-category-block';
import ProductsContainer from './components/layout/products_container/products_container';
import RefreshBtn from './components/ui/refresh-btn/refresh-btn';
import Enjoy from './components/layout/enjoy_block/enjoy';

class App {
  constructor() {
    this.container = document.body;
    window.location.hash = App.currentPageID;
  }

  static currentPageID = routes.home;

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
    const pages = Object.values(this.pages).map((page) => page.getElement());
    const currentPage = document.getElementById(App.currentPageID.slice(1));
    const [home, menu] = pages;

    pages.forEach((elem) => { elem.style.opacity = 0; });

    if (id === routes.home) {
      header.getElement().after(home);
      Enjoy.video.load();
    }
    if (id === routes.menu) {
      header.getElement().after(menu);
    }

    setTimeout(() => {
      pages.forEach((elem) => { elem.style = null; });
      if (currentPage && (id !== App.currentPageID)) currentPage.remove();

      App.currentPageID = id;
      header.render();

      // ------ only for review -----------
      ChangeCategoryBlock.value = 'coffee';
      RefreshBtn.checked = false;
      ChangeCategoryBlock.elem.render();
      ProductsContainer.elem.numShowProducts.showAll = !ProductsContainer.elem.tabletWidth.isTabletScreen();
      ProductsContainer.elem.render();
      // ------ only for review -----------
    }, 70);
  }

  router() {
    window.onhashchange = () => {
      const hash = window.location.hash.slice(1);

      if (!Object.values(routes).includes(hash)) return;

      if (hash === routes.home) return this.renderPage(hash);
      if (hash === routes.menu) return this.renderPage(hash);

      const elem = document.getElementById(hash);
      if (elem) return;

      App.currentPageID === routes.home
        ? this.renderPage(routes.menu)
        : this.renderPage(routes.home);

      const selectedItem = document.getElementById(hash);
      selectedItem.scrollIntoView();
    };
  }

  run() {
    const { header, footer } = this.elem;

    this.container.append(header.getElement());
    this.container.append(footer.getElement());

    this.renderPage(routes.home);
    this.router();
  }
}

export default App;
