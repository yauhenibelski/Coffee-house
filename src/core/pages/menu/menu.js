import ChangeCategoryBlock from '../../components/layout/change-category-block/change-category-block';
import ProductsContainer from '../../components/layout/products_container/products_container';
import Component from '../../components/template/component';
import RefreshBtn from '../../components/ui/refresh-btn/refresh-btn';
import createElement from '../../utils/createElement';
import { routes } from '../../utils/routes';

class MenuPage extends Component {
  constructor() {
    super('main', 'menu');
    this.container.id = routes.menu.slice(1);

    this.createElements();
    this.appendElements();
  }

  createElements() {
    this.headline = createElement({ tagName: 'h1', text: 'Behind each of our cups hides an <span>amazing surprise</span>' });
    this.chooseCategoryBtnWrap = createElement({ tagName: 'div', className: 'choose-category-btn-wrap' });
  }

  appendElements() {
    this.contentContainer.append(this.headline);
    this.contentContainer.append(new ChangeCategoryBlock().getElement());
    this.contentContainer.append(new ProductsContainer().getElement());
    this.contentContainer.append(new RefreshBtn().getElement());

    this.container.append(this.contentContainer);
  }
}

export default MenuPage;
