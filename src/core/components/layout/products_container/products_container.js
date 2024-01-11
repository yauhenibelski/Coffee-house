import Component from '../../template/component';
import Card from '../../ui/card/card';
import { products as productsData } from '../../../../assets/products';
import ChangeCategoryBlock from '../change-category-block/change-category-block';
import RefreshBtn from '../../ui/refresh-btn/refresh-btn';
import Burger from '../../ui/burger/burger';
import BurgerBtn from '../../ui/burger_btn/burger_btn';

class ProductsContainer extends Component {
  constructor() {
    super('div', 'products-container');
    ProductsContainer.elem = this;

    this.tabletWidth = {
      value: 768,
      isTabletScreen() { return window.innerWidth <= this.value; },
    };

    this.numShowProducts = {
      minValue: 4,
      showAll: !this.tabletWidth.isTabletScreen(),
    };

    this.setFilteredProducts();
    this.setShownProducts();
    this.createComponent();

    window.onresize = () => {
      const { showAll } = this.numShowProducts;

      if (!this.tabletWidth.isTabletScreen() && BurgerBtn.elem.classList.contains('close-burger')) {
        BurgerBtn.elem.classList.remove('close-burger');
        Burger.elem.openCloseBurger();
      }

      if (
        (this.tabletWidth.isTabletScreen() && showAll && !RefreshBtn.checked)
          || (!this.tabletWidth.isTabletScreen() && !showAll)
      ) {
        this.numShowProducts.showAll = !this.tabletWidth.isTabletScreen();
        this.setShownProducts();
        this.smoothRender();
      }
    };
  }

  createComponent() {
    this.shownProducts.forEach((product) => {
      this.container.append(new Card(product).getElement());
    });
  }

  setShownProducts() {
    this.shownProducts = this.numShowProducts.showAll
      ? [...this.filteredProducts]
      : [...this.filteredProducts].splice(0, this.numShowProducts.minValue);
  }

  setFilteredProducts() {
    this.filteredProducts = productsData.filter((product) => product.category === ChangeCategoryBlock.value);
  }

  changeCategory() {
    this.numShowProducts.showAll = !this.tabletWidth.isTabletScreen();
    RefreshBtn.checked = false;
    this.setFilteredProducts();
    this.setShownProducts();
    this.smoothRender();
  }

  smoothRender() {
    this.container.style.opacity = 0;

    setTimeout(() => {
      this.render();
      this.container.style = null;
    }, 200);
  }

  // ------ only for review -----------
  render() {
    this.container.innerHTML = '';
    RefreshBtn.elem.setVisibility();
    this.setFilteredProducts();
    this.setShownProducts();
    this.createComponent();
  }
  // ------ only for review -----------
}

export default ProductsContainer;
