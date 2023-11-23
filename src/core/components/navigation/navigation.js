import Component from '../template/component';
import createElement from '../../utils/createElement';

class Navigation extends Component {
  static links = this.links;

  constructor() {
    super('nav');
  }

  createElements() {
    const linkNames = ['Favorite coffee', 'About', 'Mobile app', 'Contact us'];

    this.links = {
      names: linkNames,
      elements: linkNames.map((linkName) => {
        const li = createElement({ tagName: 'li' });
        const link = createElement({ tagName: 'a', text: linkName });

        link.href = `#${linkName.toLocaleLowerCase()}`;
        li.append(link);

        return li;
      }),
    };
  }

  appendElements() {
    this.links.elements.forEach((element) => {
      this.container.append(element);
    });
  }
}

export default Navigation;
