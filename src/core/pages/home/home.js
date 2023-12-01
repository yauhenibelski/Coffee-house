import AboutSection from '../../components/layout/about_section/about_section';
import Enjoy from '../../components/layout/enjoy_block/enjoy';
import FavoritesCoffee from '../../components/layout/favorites_coffee/favorites_coffee';
import MobileApp from '../../components/layout/mobile-app_block/mobile-app_block';
import Component from '../../components/template/component';
import { routes } from '../../utils/routes';

class HomePage extends Component {
  constructor() {
    super('main');
    this.container.id = routes.home.slice(0, -1);
    this.appendElements();
  }

  appendElements() {
    this.container.append(new Enjoy().getElement());
    this.container.append(new FavoritesCoffee().getElement());
    this.container.append(new AboutSection().getElement());
    this.container.append(new MobileApp().getElement());
  }
}

export default HomePage;
