import Component from '../../template/component';
import Card from '../../ui/card/card';
import { products as productsData } from '../../../../assets/products';
import ChangeCategoryBlock from '../change-category-block/change-category-block';

class ProductsContainer extends Component {
  constructor() {
    super('div', 'products-container');
    this.createComponent();

    ProductsContainer.elem = this;
  }

  createComponent() {
    const filteredProducts = productsData.filter((product) => {
      return product.category === ChangeCategoryBlock.value;
    });
    filteredProducts.forEach((product) => {
      this.container.append(new Card(product).getElement());
    });
  }

  smoothRender() {
    this.container.style.opacity = 0;
    setTimeout(() => {
      this.render();
      this.container.style = null;
    }, 200);
  }
}

export default ProductsContainer;
