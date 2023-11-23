import Component from '../../template/component';
import createElement from '../../../utils/createElement';
import logo from '../../../../assets/img/logo.svg';
import cupLogo from '../../../../assets/img/coffee-cup.svg';
import getImg from '../../../utils/getImg';
import Navigation from '../../navigation/navigation';

class Header extends Component {
  constructor() {
    super('header');
  }

  createElements() {
    this.contentContainer = createElement({ tagName: 'div', className: 'content-container' });
    this.logoWrap = createElement({ tagName: 'div', className: 'logo-wrap' });
    this.menuBtn = createElement({ tagName: 'button', className: 'menu-btn' });
    this.menuBtnWrap = createElement({ tagName: 'div', className: 'menu-btn-wrap' });
    this.menuBtnIconContainer = createElement({ tagName: 'div', className: 'menu-img-container' });
    this.menuBtnText = createElement({ tagName: 'p', text: 'Menu' });
  }

  appendElements() {
    this.logoWrap.append(getImg(logo, 'logo'));

    this.menuBtnIconContainer.append(getImg(cupLogo, 'cup-logo'));
    this.menuBtnWrap.append(this.menuBtnText);
    this.menuBtnWrap.append(this.menuBtnIconContainer);
    this.menuBtn.append(this.menuBtnWrap);

    this.contentContainer.append(this.logoWrap);
    this.contentContainer.append(new Navigation().getElement());
    this.contentContainer.append(this.menuBtn);

    this.container.append(this.contentContainer);
  }
}

export default Header;
