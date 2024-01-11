import createElement from '../../../utils/createElement';
import Component from '../../template/component';
import Slider from '../slider/slider';

class SliderControl extends Component {
  constructor() {
    super('div', 'slider-control-container');

    this.createComponent();
  }

  static elements = [];

  createComponent() {
    Slider.slides.forEach((_, i) => {
      const vLine = createElement({ tagName: 'div', className: 'vie-line' });
      const vLineFill = createElement({ tagName: 'div', className: 'vie-line-fill' });

      if (i === Slider.currentNumSlide) {
        vLine.classList.add('fill');
      }

      SliderControl.elements.push(vLine);
      vLine.append(vLineFill);
      this.container.append(vLine);
    });
  }
}

export default SliderControl;
