import Enjoy from '../../components/layout/enjoy_block/enjoy';
import Component from '../../components/template/component';

class HomePage extends Component {
  constructor() {
    super('main');
  }

  appendElements() {
    this.container.append(new Enjoy().getElement());
  }
}

export default HomePage;
