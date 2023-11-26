import Component from '../../template/component';
import Card from '../../ui/card/card';
import { products as productsData } from '../../../../assets/products';
import ChangeCategoryBlock from '../change-category-block/change-category-block';

class ProductsContainer extends Component {
  constructor() {
    super('div', 'products-container');
    this.products = productsData.filter((product) => {
      return product.category === ChangeCategoryBlock.value;
    });

    this.appendElements();
  }

  appendElements() {
    this.products.forEach((product) => {
      this.container.append(new Card(product).getElement());
    });
  }
}

export default ProductsContainer;
