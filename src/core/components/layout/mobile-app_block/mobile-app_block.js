import createElement from '../../../utils/createElement';
import AppStoreBtn from '../../ui/app-store_btn/app-store_btn';
import Component from '../../template/component';
import appleIcon from '../../../../assets/img/apple_icon.html';
import googleIcon from '../../../../assets/img/google-play-icon.html';

class MobileApp extends Component {
  constructor() {
    super('section', 'mobile-app');
    this.container.id = 'mobile-app';

    this.createElements();
    this.appendElements();
  }

  createElements() {
    this.downloadContainer = createElement({ tagName: 'div', className: 'download-container' });
    this.mobileScreens = createElement({ tagName: 'div', className: 'mobile-screens' });
    this.headline = createElement({ tagName: 'h2', text: '<span>Download</span> our apps to start ordering' });
    this.offer = createElement({ tagName: 'p', className: 'offer-text', text: 'Download the Resource app today and experience the comfort of ordering your favorite coffee from wherever you are' });
    this.btnContainer = createElement({ tagName: 'div', className: 'btn-container' });
  }

  appendElements() {
    this.btnContainer.append(new AppStoreBtn(appleIcon, 'Available on the', 'App Store').getElement());
    this.btnContainer.append(new AppStoreBtn(googleIcon, 'Available on', 'Google Play').getElement());

    this.downloadContainer.append(this.headline);
    this.downloadContainer.append(this.offer);
    this.downloadContainer.append(this.btnContainer);

    this.contentContainer.append(this.downloadContainer);
    this.contentContainer.append(this.mobileScreens);

    this.container.append(this.contentContainer);
  }
}

export default MobileApp;
