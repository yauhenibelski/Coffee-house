import createElement from '../../../utils/createElement';
import Component from '../../template/component';

class Enjoy extends Component {
  constructor() {
    super('section', 'enjoy');
  }

  createElements() {
    this.offerBlock = createElement({ tagName: 'div', className: 'offerBlock' });
    this.headline = createElement({ tagName: 'h1', text: '<span>Enjoy</span> premium coffee at our charming cafe' });
    this.text = createElement({ tagName: 'p', text: 'With its inviting atmosphere and delicious coffee options, the Coffee House Resource is a popular destination for coffee lovers and those seeking a warm and inviting space to enjoy their favorite beverage.' });
    this.menuBtn = createElement({ tagName: 'button' });
    this.menuBtnText = createElement({ tagName: 'p', text: 'Menu' });
  }

  appendElements() {
    this.menuBtn.append(this.menuBtnText);

    this.offerBlock.append(this.headline);
    this.offerBlock.append(this.text);
    this.offerBlock.append(this.menuBtn);

    this.contentContainer.append(this.offerBlock);
    this.container.append(this.contentContainer);
  }
}

export default Enjoy;
