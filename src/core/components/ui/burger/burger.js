import createElement from '../../../utils/createElement';
import Component from '../../template/component';

class Burger extends Component {
  constructor(links) {
    super('div', 'burger-wrapper');
    this.links = links.map((link) => link.cloneNode(true));
    this.createComponent();
  }

  static open = false;

  createComponent() {
    this.button = createElement({ tagName: 'div', className: 'burger-btn' });
    this.menu = createElement({ tagName: 'div', className: 'burger' });
    this.links.forEach((li) => this.menu.append(li));

    this.container.append(this.menu);

    this.button.onclick = () => {
      if (Burger.open) {
        this.closeBurger();
        document.body.onclick = null;
      } else {
        this.openBurger();

        setTimeout(() => {
          document.body.onclick = () => {
            if (Burger.open) this.closeBurger();
            document.body.onclick = null;
          };
        });
      }
    };
  }

  openBurger() {
    this.menu.classList.add('burger-active');
    this.button.classList.add('burger-btn-active');
    Burger.open = true;
  }

  closeBurger() {
    this.menu.classList.remove('burger-active');
    this.button.classList.remove('burger-btn-active');
    Burger.open = false;
  }

  getElement() {
    return {
      button: this.button,
      menu: this.container,
    };
  }
}

export default Burger;
