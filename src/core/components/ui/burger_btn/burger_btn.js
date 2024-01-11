import Component from '../../template/component';
import Burger from '../burger/burger';

class BurgerBtn extends Component {
  constructor() {
    super('div', 'burger-btn');

    this.createComponent();
    BurgerBtn.elem = this.container;
  }

  createComponent() {
    this.container.insertAdjacentHTML('beforeend', `
      <div class="lines-container">
        <div class="first-line"></div>
        <div class="second-line"></div>
      </div>
    `);

    this.container.onclick = () => {
      this.container.classList.toggle('close-burger');
      Burger.elem.openCloseBurger();
    };
  }
}

export default BurgerBtn;
