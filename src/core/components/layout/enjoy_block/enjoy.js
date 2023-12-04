import createElement from '../../../utils/createElement';
import Component from '../../template/component';
import { redirectTo } from '../../../utils/redirectTo';
import { routes } from '../../../utils/routes';

class Enjoy extends Component {
  constructor() {
    super('section', 'enjoy');

    this.createElements();
    this.appendElements();

    this.menuBtn.onclick = () => redirectTo(routes.menu);
  }

  createElements() {
    this.offerBlock = createElement({ tagName: 'div', className: 'offerBlock' });
    this.headline = createElement({ tagName: 'h1', text: '<span>Enjoy</span> premium coffee at our charming cafe' });
    this.text = createElement({ tagName: 'p', text: 'With its inviting atmosphere and delicious coffee options, the Coffee House Resource is a popular destination for coffee lovers and those seeking a warm and inviting space to enjoy their favorite beverage.' });
    this.menuBtn = createElement({ tagName: 'div', className: 'menu-btn' });
    this.menuBtnText = createElement({ tagName: 'p', text: 'Menu' });
    this.content = createElement({ tagName: 'div', className: 'content' });
  }

  appendElements() {
    this.menuBtn.append(this.menuBtnText);

    this.offerBlock.append(this.headline);
    this.offerBlock.append(this.text);
    this.offerBlock.append(this.menuBtn);

    this.content.append(this.offerBlock);

    this.contentContainer.append(this.content);
    this.container.append(this.contentContainer);
  }
}

export default Enjoy;
