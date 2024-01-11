import createElement from '../../../utils/createElement';
import Component from '../../template/component';
import SliderControl from '../../ui/slider_control/slider_control';
import Slider from '../../ui/slider/slider';

class FavoritesCoffee extends Component {
  constructor() {
    super('section', 'favorite-coffee');
    this.container.id = 'favorite-coffee';

    this.createComponent();
  }

  createComponent() {
    this.headline = createElement({
      tagName: 'h2',
      text: 'Choose your <span>favorite</span> coffee',
    });

    this.contentContainer.append(this.headline);
    this.contentContainer.append(new Slider().getElement());
    this.contentContainer.append(new SliderControl().getElement());

    this.container.append(this.contentContainer);
  }
}

export default FavoritesCoffee;
