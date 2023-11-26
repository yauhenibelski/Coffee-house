import createElement from '../../../utils/createElement';
import Component from '../../template/component';

class AppStoreBtn extends Component {
  constructor(logoHTML, text, storeText) {
    super('button', 'app-Store-Btn');

    this.createElements();
    this.appendElements();

    this.logoWrap.innerHTML = logoHTML;
    this.text.innerHTML = text;
    this.storeText.innerHTML = storeText;
  }

  createElements() {
    this.logoWrap = createElement({ tagName: 'div', className: 'logo-wrap' });
    this.textContainer = createElement({ tagName: 'div', className: 'text-container' });
    this.text = createElement({ tagName: 'p' });
    this.storeText = createElement({ tagName: 'p' });
  }

  appendElements() {
    this.textContainer.append(this.text);
    this.textContainer.append(this.storeText);

    this.container.append(this.logoWrap);
    this.container.append(this.textContainer);
  }
}

export default AppStoreBtn;
