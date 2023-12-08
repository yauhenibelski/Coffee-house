import ProductsContainer from '../../layout/products_container/products_container';
import Component from '../../template/component';

class RefreshBtn extends Component {
  constructor() {
    super('div', 'refresh-btn');
    RefreshBtn.elem = this;
    this.setVisibility();

    this.container.onclick = () => {
      // ProductsContainer.elem.setNextProductPage();
      ProductsContainer.elem.numShowProducts = 8;
      ProductsContainer.elem.setShownProducts();
      ProductsContainer.elem.smoothRender();
    };
  }

  setVisibility() {
    // const { shownProducts } = ProductsContainer.elem;
    // const numOfPages = shownProducts.length;

    // numOfPages <= 1
    //   ? this.container.style.display = 'none'
    //   : this.container.style.display = 'block';

    const { shownProducts, filteredProducts } = ProductsContainer.elem;
  
    shownProducts.length === filteredProducts.length
      ? this.container.style.display = 'none'
      : this.container.style.display = 'block';
  }
}

export default RefreshBtn;
