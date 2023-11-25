import Component from '../../template/component';
import innerFooterHTML from './innerFooter.html';

class Footer extends Component {
  constructor() {
    super('footer');
    this.contentContainer.id = 'contact-us';
  }

  appendElements() {
    this.contentContainer.insertAdjacentHTML('beforeend', innerFooterHTML);
    this.container.append(this.contentContainer);
  }
}

export default Footer;
