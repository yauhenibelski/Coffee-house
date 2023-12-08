import Component from '../../template/component';
import Card from '../../ui/card/card';
import { products as productsData } from '../../../../assets/products';
import ChangeCategoryBlock from '../change-category-block/change-category-block';
import RefreshBtn from '../../ui/refresh-btn/refresh-btn';

class ProductsContainer extends Component {
  constructor() {
    super('div', 'products-container');
    ProductsContainer.elem = this;
    this.tabletWidthPoint = 768;
    this.numShowProducts = window.innerWidth <= this.tabletWidthPoint ? 4 : 8;
    this.productPage = 0;

    this.setFilteredProducts();
    this.setShownProducts();
    this.createComponent();

    window.onresize = () => {
      const areAllProductsShown = this.filteredProducts.length === this.shownProducts.length;

      if (window.innerWidth <= this.tabletWidthPoint && areAllProductsShown) {
        // this.productPage = 0;
        this.numShowProducts = 4;
        this.setShownProducts();
        this.smoothRender();
      } // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      if (window.innerWidth > this.tabletWidthPoint && !areAllProductsShown) {
        // this.productPage = 0;
        this.numShowProducts = 8;
        this.setShownProducts();
        this.smoothRender();
      }
    };
  }

  createComponent() {
    // this.shownProducts[this.productPage].forEach((product) => {
    //   this.container.append(new Card(product).getElement());
    // });
    this.shownProducts.forEach((product) => {
      this.container.append(new Card(product).getElement());
    });
  }

  // setNextProductPage() {
  //   this.productPage + 1 in this.shownProducts
  //     ? this.productPage += 1
  //     : this.productPage = 0;
  // }

  setShownProducts() {
    // this.shownProducts = new Array(
    //   Math.round(this.filteredProducts.length / this.numShowProducts),
    // ).fill([])
    //   .map((_, i) => {
    //     return [...this.filteredProducts].splice(i === 0 ? i : i * this.numShowProducts, this.numShowProducts);
    //   });
    this.shownProducts = [...this.filteredProducts].splice(0, this.numShowProducts);
  }

  setFilteredProducts() {
    this.filteredProducts = productsData.filter((product) => product.category === ChangeCategoryBlock.value);
  }

  changeCategory() {
    // this.productPage = 0;
    this.numShowProducts = window.innerWidth <= this.tabletWidthPoint ? 4 : 8;
    this.setFilteredProducts();
    this.setShownProducts();
    this.smoothRender();
  }

  smoothRender() {
    this.container.style.opacity = 0;
    RefreshBtn.elem.setVisibility();
  
    setTimeout(() => {
      this.render();
      this.container.style = null;
    }, 300);
  }
}

export default ProductsContainer;
