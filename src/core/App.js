import Footer from './components/layout/footer/footer';
import Header from './components/layout/header/header';
import MenuPage from './pages/menu/menu';
import HomePage from './pages/home/home';
import { routes } from './utils/routes';
import Enjoy from './components/layout/enjoy_block/enjoy';
import Slider from './components/ui/slider/slider';
import getDeviceType from './utils/getDeviceType';

class App {
  constructor() {
    this.container = document.body;
    const path = window.location.hash.slice(1);
    App.currentPageID = [routes.home, routes.menu].includes(path) ? path : routes.home;
    window.location.hash = App.currentPageID;
  }

  static deviceType = getDeviceType();

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

      clearInterval(Slider.interval.id);
      Slider.autoChangeSlide(Slider.interval.delay);
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

    this.renderPage(App.currentPageID);
    this.router();
  }
}

export default App;
