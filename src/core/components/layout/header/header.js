import Component from '../../template/component';
import createElement from '../../../utils/createElement';
import logoSvg from '../../../../assets/img/logo.svg';
import cupLogo from '../../../../assets/img/coffee-cup.svg';
import getImg from '../../../utils/getImg';
import Navigation from '../../ui/navigation/navigation';
import App from '../../../App';
import { redirectTo } from '../../../utils/redirectTo';

class Header extends Component {
  constructor() {
    super('header');

    this.createComponent();
  }

  createComponent() {
    const logo = createElement({ tagName: 'div', className: 'logo-wrap' });
    const menuBtn = createElement({ tagName: 'button', className: 'menu-btn' });
    const menuBtnWrap = createElement({ tagName: 'div', className: 'menu-btn-wrap' });
    const menuBtnIconContainer = createElement({ tagName: 'div', className: 'menu-img-container' });
    const menuBtnText = createElement({ tagName: 'p', text: 'Menu' });

    if (App.currentPageID === 'home/') {
      menuBtn.classList.add('menu-btn-hover');
    }
    if (App.currentPageID === 'menu/') {
      menuBtn.classList.add('menu-btn-active');
      logo.classList.add('logo-active');
    }

    menuBtn.onclick = () => (App.currentPageID === 'home/' ? redirectTo('menu/') : false);
    logo.onclick = () => (App.currentPageID === 'menu/' ? redirectTo('home/') : false);

    logo.append(getImg(logoSvg, 'logo'));

    menuBtnIconContainer.append(getImg(cupLogo, 'cup-logo'));
    menuBtnWrap.append(menuBtnText);
    menuBtnWrap.append(menuBtnIconContainer);
    menuBtn.append(menuBtnWrap);

    this.contentContainer.append(logo);
    this.contentContainer.append(new Navigation().getElement());
    this.contentContainer.append(menuBtn);

    this.container.append(this.contentContainer);
  }
}

export default Header;
