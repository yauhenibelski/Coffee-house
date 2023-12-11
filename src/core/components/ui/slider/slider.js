import createElement from '../../../utils/createElement';
import Component from '../../template/component';
import slide1 from '../../../../assets/img/coffee-slider-1.png';
import slide2 from '../../../../assets/img/coffee-slider-2.png';
import slide3 from '../../../../assets/img/coffee-slider-3.png';
import Slide from '../slide/slide';
import SliderControl from '../slider_control/slider_control';

class Slider extends Component {
  constructor() {
    super('div', 'slider-wrap');

    this.createComponent();

    this.leftBtn.onclick = () => this.changeSlide('left');
    this.rightBtn.onclick = () => this.changeSlide('right');

    Slider.playStopAnimation = this.playStopAnimation.bind(this);
    Slider.changeSlide = this.changeSlide.bind(this);
    Slider.autoChangeSlide = this.autoChangeSlide.bind(this);

    this.slideContainerWrap.onmouseover = () => { Slider.playStopAnimation('stop'); };
    this.slideContainerWrap.onmouseout = () => { Slider.playStopAnimation('play'); };

    let clientX;

    this.slideContainerWrap.ontouchstart = (e) => {
      clientX = e.changedTouches[0].clientX;
      Slider.playStopAnimation('stop');
    };
    this.slideContainerWrap.ontouchend = (e) => {
      const difference = e.changedTouches[0].clientX - clientX;
      const value = (difference) < 0 ? 'right' : 'left';

      if (Math.abs(difference) > 30) Slider.changeSlide(value);
      Slider.playStopAnimation('play');
    };

    this.slideContainerWrap.onmousedown = (e) => { clientX = e.clientX; };
    this.slideContainerWrap.onmouseup = (e) => {
      const difference = e.clientX - clientX;
      const value = (difference) < 0 ? 'right' : 'left';
      if (Math.abs(difference) < 30) return;

      Slider.changeSlide(value);
    };
  }

  static currentNumSlide = 0;

  static lastSlide = 0;

  createComponent() {
    this.leftBtn = createElement({ tagName: 'button', className: 'left-btn' });
    this.rightBtn = createElement({ tagName: 'button', className: 'right-btn' });

    this.slideContainerWrap = createElement({ tagName: 'div', className: 'slider-container-wrap' });
    this.slideContainer = createElement({ tagName: 'div', className: 'slider-container' });

    Slider.slides.forEach((slide) => this.slideContainer.append(slide));

    this.slideContainerWrap.append(this.slideContainer);

    this.container.append(this.leftBtn);
    this.container.append(this.slideContainerWrap);
    this.container.append(this.rightBtn);
  }

  changeSlide(value) {
    let nextSlideNum;
    if (value === 'right') {
      nextSlideNum = Slider.currentNumSlide + 1 in Slider.slides
        ? Slider.currentNumSlide + 1
        : 0;
    }

    if (value === 'left') {
      nextSlideNum = Slider.currentNumSlide - 1 in Slider.slides
        ? Slider.currentNumSlide - 1
        : Slider.slides.length - 1;
    }

    const currentControl = SliderControl.elements[Slider.currentNumSlide].firstElementChild;
    const currentControlWidth = getComputedStyle(currentControl).width;

    currentControl.style.width = currentControlWidth;

    Slider.lastSlide = Slider.currentNumSlide;

    setTimeout(() => {
      SliderControl.elements[Slider.lastSlide].firstElementChild.style.width = '0px';
    });

    SliderControl.elements[Slider.lastSlide].classList.remove('fill');
    this.slideContainer.style.transform = `translateX(-${nextSlideNum * Slider.slides[nextSlideNum].offsetWidth}px)`;
    SliderControl.elements[nextSlideNum].classList.add('fill');

    Slider.currentNumSlide = nextSlideNum;
    Slider.interval.delay = Slider.interval.animationDelay;

    Slider.autoChangeSlide(Slider.interval.delay);
  }

  static interval = {
    id: null,
    delay: 5000,
    startTime: null,
    stopTime: null,
    animationDelay: 5000,
  };

  autoChangeSlide(delay) {
    if (Slider.interval.id) {
      clearInterval(Slider.interval.id);
    }

    Slider.interval.startTime = Date.now();
    Slider.interval.id = setInterval(() => {
      this.changeSlide('right');
    }, delay);
  }

  playStopAnimation(value) {
    if (value === 'stop') {
      SliderControl.elements.forEach((e) => { e.firstElementChild.style.animationPlayState = 'paused'; });
      Slider.interval.stopTime = Date.now();
      clearInterval(Slider.interval.id);
    }

    if (value === 'play') {
      const delay = Slider.interval.delay - (Slider.interval.stopTime - Slider.interval.startTime);
      SliderControl.elements.forEach((e) => { e.firstElementChild.style.animationPlayState = 'running'; });

      Slider.interval.delay = delay > Slider.interval.animationDelay
        ? Slider.interval.animationDelay
        : delay;

      Slider.autoChangeSlide(Slider.interval.delay);
    }
  }

  static slides = [
    {
      img: slide1,
      headline: 'S’mores Frappuccino',
      description: 'This new drink takes an espresso and mixes it with brown sugar and cinnamon before being topped with oat milk.',
      price: '$5.50',
    },
    {
      img: slide2,
      headline: 'Caramel Macchiato',
      description: 'Fragrant and unique classic espresso with rich caramel-peanut syrup, with cream under whipped thick foam.',
      price: '$5.00',
    },
    {
      img: slide3,
      headline: 'Ice coffee',
      description: 'A popular summer drink that tones and invigorates. Prepared from coffee, milk and ice.',
      price: '$4.50',
    },
  ].map((s) => new Slide(s).getElement());
}

export default Slider;
