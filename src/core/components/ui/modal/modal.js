import createElement from '../../../utils/createElement';
import getImg from '../../../utils/getImg';
import Component from '../../template/component';
import ModalParameters from '../modal-parameters/modal-parameters';
import Popup from '../popup/popup';

class Modal extends Component {
  constructor(product) {
    super('div', 'modal-wrap');

    Modal.total = createElement({ tagName: 'h3', text: `$${product.price}` });
    this.product = product;

    this.createComponent();

    Modal.parametersElem = this.container.querySelectorAll('input');
  }

  static setTotal(product) {
    let sum = Number(product.price);
    Modal.parametersElem.forEach((elem) => {
      if (elem.checked) {
        sum += Number(elem.value);
      }
    });
    Modal.total.innerText = `$${(sum).toFixed(2)}`;
  }

  createComponent() {
    const imgWrap = createElement({ tagName: 'div', className: 'img-wap' });
    const descriptionWrap = createElement({ tagName: 'div', className: 'description-wrap' });

    const name = createElement({ tagName: 'h3', text: this.product.name, className: 'name' });
    const description = createElement({ tagName: 'p', text: this.product.description, className: 'description' });
    const priceContainer = createElement({ tagName: 'div', className: 'price-container' });
    const totalText = createElement({ tagName: 'h3', text: 'Total:' });
    const alert = createElement({ tagName: 'div', className: 'alert', text: 'The cost is not final. Download our mobile app to see the final price and place your order. Earn loyalty points and enjoy your favorite coffee with up to 20% discount.' });

    const closeBtn = createElement({ tagName: 'div', className: 'close-btn', text: 'Close' });
    closeBtn.onclick = () => { Popup.elem.remove(); };

    priceContainer.append(totalText);
    priceContainer.append(Modal.total);

    descriptionWrap.append(name);
    descriptionWrap.append(description);
    descriptionWrap.append(new ModalParameters(this.product, 'sizes', 'Size', 'radio').getElement());
    descriptionWrap.append(new ModalParameters(this.product, 'additives', 'Additives', 'checkbox').getElement());
    descriptionWrap.append(priceContainer);
    descriptionWrap.append(alert);
    descriptionWrap.append(closeBtn);

    imgWrap.append(getImg(this.product.image));

    this.container.append(imgWrap);
    this.container.append(descriptionWrap);
  }
}

export default Modal;
