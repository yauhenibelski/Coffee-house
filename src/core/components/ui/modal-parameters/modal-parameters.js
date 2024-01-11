import createElement from '../../../utils/createElement';
import Component from '../../template/component';
import ChooseCategoryBtn from '../choose-category_btn/choose-category_btn';
import Modal from '../modal/modal';

class ModalParameters extends Component {
  constructor(product, propName, name, type) {
    super('div', 'modal-parameters-wrap');

    this.container.classList.add(propName);
    this.name = name;
    this.propName = propName;
    this.type = type;
    this.props = Object.entries(product[this.propName]);
    this.createComponent();

    if (type === 'radio') {
      const firstElem = this.buttonsWrap.querySelectorAll('input')[0];
      firstElem.checked = true;
    }

    this.container.onchange = () => Modal.setTotal(product);
  }

  createComponent() {
    const nameText = createElement({ tagName: 'p', text: this.name });
    this.buttonsWrap = createElement({ tagName: 'div', className: 'buttons-wrap' });
    this.container.append(nameText);
    this.props.forEach((prop) => {
      const [key, value] = prop;
      const chooseCategoryBtn = new ChooseCategoryBtn(
        {
          id: key,
          name: this.propName,
          text: Object.entries(value)[0][1],
          icon: Number.isFinite(+key) ? (+key + 1) : key.toUpperCase(),
          value: Object.entries(value)[1][1],
        },
        this.type,
      ).getElement();

      this.buttonsWrap.append(chooseCategoryBtn);
    });
    this.container.append(nameText);
    this.container.append(this.buttonsWrap);
  }
}

export default ModalParameters;
