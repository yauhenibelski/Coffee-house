import createElement from '../../../utils/createElement';
import getImg from '../../../utils/getImg';
import Component from '../../template/component';

class Slide extends Component {
  constructor(prop) {
    super('div', 'slide');
    this.prop = prop;
    this.createComponent();
  }

  createComponent() {
    this.slideImgWrap = createElement({ tagName: 'div', className: 'img-wrap' });
    this.slideHeadline = createElement({ tagName: 'h3', className: 'slider-headline', text: this.prop.headline });
    this.slideDescription = createElement({ tagName: 'p', className: 'slider-description', text: this.prop.description });
    this.slidePrice = createElement({ tagName: 'span', className: 'slider-price', text: this.prop.price });

    this.slideImgWrap.append(getImg(this.prop.img));

    this.container.append(this.slideImgWrap);
    this.container.append(this.slideHeadline);
    this.container.append(this.slideDescription);
    this.container.append(this.slidePrice);
  }
}

export default Slide;
