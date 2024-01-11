import Component from '../../template/component';
import createElement from '../../../utils/createElement';

class Navigation extends Component {
  constructor() {
    super('nav');

    this.createElements();
    this.appendElements();
  }

  createElements() {
    const linkNames = ['Favorite coffee', 'About', 'Mobile app', 'Contact us'];
    this.nList = createElement({ tagName: 'ul' });

    Navigation.links = {
      names: linkNames,
      elements: linkNames.map((linkName) => {
        const li = createElement({ tagName: 'li' });
        const link = createElement({ tagName: 'a', text: linkName });

        link.href = `#${linkName.replace(' ', '-').toLocaleLowerCase()}`;
        li.append(link);

        return li;
      }),
    };
  }

  appendElements() {
    Navigation.links.elements.forEach((element) => {
      this.nList.append(element);
    });

    this.container.append(this.nList);
  }
}

export default Navigation;
