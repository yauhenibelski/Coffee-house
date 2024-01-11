import ProductsContainer from '../../layout/products_container/products_container';
import Component from '../../template/component';

class RefreshBtn extends Component {
  static checked = true;

  constructor() {
    super('div', 'refresh-btn');
    RefreshBtn.elem = this;
    this.setVisibility();

    this.container.onclick = () => {
      ProductsContainer.elem.numShowProducts.showAll = true;
      ProductsContainer.elem.setShownProducts();
      ProductsContainer.elem.smoothRender();
      RefreshBtn.checked = true;
    };
  }

  setVisibility() {
    const { shownProducts, filteredProducts } = ProductsContainer.elem;

    shownProducts.length === filteredProducts.length
      ? this.container.style.display = 'none'
      : this.container.style.display = 'block';
  }
}

export default RefreshBtn;
