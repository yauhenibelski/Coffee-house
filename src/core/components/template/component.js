import createElement from '../../utils/createElement';

class Component {
  constructor(tagName, className) {
    this.container = createElement({ tagName });
    this.contentContainer = createElement({ tagName: 'div', className: 'content-container' });

    if (className) this.container.className = className;
  }

  // eslint-disable-next-line class-methods-use-this
  appendElements() {
    // append elements () => void
  }

  // eslint-disable-next-line class-methods-use-this
  createComponent() {
    // create elements () => void
  }

  render() {
    this.container.innerHTML = '';
    this.contentContainer.innerHTML = '';

    this.createComponent();
  }

  getElement() {
    return this.container;
  }
}

export default Component;
