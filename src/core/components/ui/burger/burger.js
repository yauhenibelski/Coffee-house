import App from '../../../App';
import createElement from '../../../utils/createElement';
import { redirectTo } from '../../../utils/redirectTo';
import { routes } from '../../../utils/routes';
import Component from '../../template/component';

class Burger extends Component {
  constructor(links) {
    super('div', 'burger-wrapper');

    this.links = links.map((link) => link.cloneNode(true));
    this.createComponent();

    Burger.elem = this;
  }

  open = false;

  createComponent() {
    this.menu = createElement({ tagName: 'div', className: 'burger' });
    this.nList = createElement({ tagName: 'ul' });
    const menuBtn = createElement({ tagName: 'div', className: 'burger-menu-btn', text: 'Menu' });

    menuBtn.onclick = () => (App.currentPageID === routes.home && redirectTo(routes.menu));

    this.links.forEach((li) => this.nList.append(li));

    this.menu.append(this.nList);
    this.menu.append(menuBtn);
    this.container.append(this.menu);
  }

  openCloseBurger() {
    this.menu.classList.toggle('burger-active');
    this.open = !this.open;

    this.container.style.height = this.open ? '100vh' : '0vh';
    document.body.style.overflow = this.open ? 'hidden' : '';

    document.body.onclick = null;
  }
}

export default Burger;
