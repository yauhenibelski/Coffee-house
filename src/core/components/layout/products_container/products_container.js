import Component from '../../template/component';
import Card from '../../ui/card/card';
import { products as productsData } from '../../../../assets/products';
import ChangeCategoryBlock from '../change-category-block/change-category-block';

class ProductsContainer extends Component {
  constructor() {
    super('div', 'products-container');
    this.numShowProducts = window.innerWidth < 1050 ? 4 : 8;
    this.createComponent();

    ProductsContainer.elem = this;

    window.onresize = () => {
      if (window.innerWidth < 1050 && this.numShowProducts > 4) {
        this.numShowProducts= 4;
        this.smoothRender();
      } 
      if (window.innerWidth > 1050 && this.numShowProducts < 8) {
        this.numShowProducts = 8;
        this.smoothRender();
      }
    };
  }

  createComponent() {
    const filteredProducts = productsData.filter((product, i) => {
      return product.category === ChangeCategoryBlock.value && i < this.numShowProducts;
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
