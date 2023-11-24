import createElement from '../../utils/createElement';
import Component from '../template/component';

class SliderControl extends Component {
  constructor() {
    super('div', 'slider-control-container');
  }

  createElements() {
    const mockSlides = new Array(3).fill(null);
    this.activeSlide = 0;

    mockSlides.forEach((_, i) => {
      const vLine = createElement({ tagName: 'div', className: 'vie-line' });
      if (this.activeSlide === i) {
        vLine.classList.add('vie-line-active');
      }
      this.container.append(vLine);
    });
  }
}

export default SliderControl;
