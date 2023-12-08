import Component from '../../template/component';
import ChooseCategoryBtn from '../../ui/choose-category_btn/choose-category_btn';
import ProductsContainer from '../products_container/products_container';

class ChangeCategoryBlock extends Component {
  constructor() {
    super('div', 'choose-category-btn-wrap');

    this.createElements();
    this.appendElements();

    const firstBtn = this.chooseCategoryBTNs[0].firstElementChild;
    firstBtn.checked = true;
    ChangeCategoryBlock.value = firstBtn.id;

    this.container.onchange = () => {
      this.chooseCategoryBTNs.forEach((elem) => {
        const inputElem = elem.firstChild;

        if (inputElem.checked) {
          ChangeCategoryBlock.value = inputElem.id;
          ProductsContainer.elem.changeCategory();
        }
      });
    };
  }

  createElements() {
    this.chooseCategoryBTNs = [
      new ChooseCategoryBtn({
        id: 'coffee', name: 'category', text: 'Coffee', icon: '☕',
      }).getElement(),
      new ChooseCategoryBtn({
        id: 'tea', name: 'category', text: 'Tea', icon: '🫖',
      }).getElement(),
      new ChooseCategoryBtn({
        id: 'dessert', name: 'category', text: 'Dessert', icon: '🍰',
      }).getElement(),
    ];
  }

  appendElements() {
    this.chooseCategoryBTNs.forEach((elem) => this.container.append(elem));
  }
}
export default ChangeCategoryBlock;
