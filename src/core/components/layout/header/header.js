import Component from '../../template/component';
import createElement from '../../../utils/createElement';
import logoSvg from '../../../../assets/img/logo.svg';
import cupLogo from '../../../../assets/img/coffee-cup.svg';
import getImg from '../../../utils/getImg';
import Navigation from '../../ui/navigation/navigation';
import App from '../../../App';
import { redirectTo } from '../../../utils/redirectTo';
import { routes } from '../../../utils/routes';
import Burger from '../../ui/burger/burger';
import BurgerBtn from '../../ui/burger_btn/burger_btn';

class Header extends Component {
  constructor() {
    super('header');

    this.createComponent();
  }

  createComponent() {
    const logo = createElement({ tagName: 'div', className: 'logo-wrap' });
    const menuBtn = createElement({ tagName: 'div', className: 'menu-btn' });
    const menuBtnWrap = createElement({ tagName: 'div', className: 'menu-btn-wrap' });
    const menuBtnIconContainer = createElement({ tagName: 'div', className: 'menu-img-container' });
    const menuBtnText = createElement({ tagName: 'p', text: 'Menu' });
    this.nav = new Navigation().getElement();
    this.burger = new Burger(Navigation.links.elements).getElement();

    if (App.currentPageID === routes.home) {
      menuBtn.classList.add('menu-btn-hover');
    }
    if (App.currentPageID === routes.menu) {
      menuBtn.classList.add('menu-btn-active');
      logo.classList.add('logo-active');
    }

    menuBtn.onclick = () => (App.currentPageID === routes.home && redirectTo(routes.menu));
    logo.onclick = () => (App.currentPageID === routes.menu && redirectTo(routes.home));

    logo.append(getImg(logoSvg, 'logo'));

    menuBtnIconContainer.append(getImg(cupLogo, 'cup-logo'));
    menuBtnWrap.append(menuBtnText);
    menuBtnWrap.append(menuBtnIconContainer);
    menuBtn.append(menuBtnWrap);

    this.contentContainer.append(logo);
    this.contentContainer.append(this.nav);
    this.contentContainer.append(menuBtn);

    this.contentContainer.append(new BurgerBtn().getElement());
    this.contentContainer.append(this.burger);

    this.container.append(this.contentContainer);
  }
}

export default Header;
