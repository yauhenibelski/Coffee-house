import AboutSection from '../../components/layout/about_section/about_section';
import Enjoy from '../../components/layout/enjoy_block/enjoy';
import FavoritesCoffee from '../../components/layout/favorites_coffee/favorites_coffee';
import Component from '../../components/template/component';

class HomePage extends Component {
  constructor() {
    super('main');
  }

  appendElements() {
    this.container.append(new Enjoy().getElement());
    this.container.append(new FavoritesCoffee().getElement());
    this.container.append(new AboutSection().getElement());
  }
}

export default HomePage;
