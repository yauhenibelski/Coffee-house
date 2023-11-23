import Header from '../../components/layout/header/header';
import Component from '../../components/template/component';

class HomePage extends Component {
  constructor() {
    super('main');
  }

  appendElements() {
    this.container.append(new Header().getElement());
  }
}

export default HomePage;
