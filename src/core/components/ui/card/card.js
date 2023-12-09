import Component from '../../template/component';
import Popup from '../popup/popup';

class Card extends Component {
  constructor(product) {
    super('div', 'card-container');
    this.product = product;

    this.createElements();
    this.appendElements();

    this.container.onclick = () => {
      Popup.run(new Card(product).getElement())
      console.log(1)
    }
  }

  createElements() {
    this.cardHTML = `
      <div class="img-wrap">
      <img src="${this.product.image}" alt="card-image">
      </div>
      <div class="text-wrap">
        <h3>${this.product.name}</h3>
        <p>${this.product.description}</p>
      </div>
      <h3 class="price">$${this.product.price}</h3>
    `;
  }

  appendElements() {
    this.container.insertAdjacentHTML('beforeend', this.cardHTML);
  }
}

export default Card;
