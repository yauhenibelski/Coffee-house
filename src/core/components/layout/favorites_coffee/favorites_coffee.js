import createElement from '../../../utils/createElement';
import Component from '../../template/component';
import getImg from '../../../utils/getImg';
import slideImg from '../../../../assets/img/coffee-slider-1.png';
import SliderControl from '../../slider_control/slider_control';

class FavoritesCoffee extends Component {
  constructor() {
    super('section', 'favorite-coffee');
    this.container.id = 'favorite-coffee';
  }

  createElements() {
    this.headline = createElement({
      tagName: 'h2',
      text: 'Choose your <span>favorite</span> coffee',
    });
    this.sliderWrap = createElement({ tagName: 'div', className: 'slider-wrap' });
    this.leftBtn = createElement({ tagName: 'button', className: 'left-btn' });
    this.rightBtn = createElement({ tagName: 'button', className: 'right-btn' });

    //! -------- coffee slide ------------
    this.slideContainer = createElement({ tagName: 'div', className: 'slider-container' });
    this.slideImgWrap = createElement({ tagName: 'div', className: 'img-wrap' });
    this.slideHeadline = createElement({ tagName: 'h3', className: 'slider-headline', text: 'S’mores Frappuccino' });
    this.slideDescription = createElement({ tagName: 'p', className: 'slider-description', text: 'This new drink takes an espresso and mixes it with brown sugar and cinnamon before being topped with oat milk.' });
    this.slidePrice = createElement({ tagName: 'span', className: 'slider-price', text: '$5.50' });
    //!----------------------------------
  }

  appendElements() {
    //! -------- coffee slide ------------
    this.slideImgWrap.append(getImg(slideImg));

    this.slideContainer.append(this.slideImgWrap);
    this.slideContainer.append(this.slideHeadline);
    this.slideContainer.append(this.slideDescription);
    this.slideContainer.append(this.slidePrice);
    //!----------------------------------

    this.sliderWrap.append(this.leftBtn);
    this.sliderWrap.append(this.slideContainer);
    this.sliderWrap.append(this.rightBtn);

    this.contentContainer.append(this.headline);
    this.contentContainer.append(this.sliderWrap);
    this.contentContainer.append(new SliderControl().getElement());

    this.container.append(this.contentContainer);
  }
}

export default FavoritesCoffee;
