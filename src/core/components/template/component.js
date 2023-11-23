class Component {
  constructor(tagName, className) {
    this.container = document.createElement(tagName);

    if (className) this.container.className = className;

    this.createElements();
    this.appendElements();
  }

  // eslint-disable-next-line class-methods-use-this
  appendElements() {
    // append elements () => void
  }

  // eslint-disable-next-line class-methods-use-this
  createElements() {
    // append elements () => void
  }

  render() {
    this.container.innerHTML = '';
    this.appendElements();
  }

  getElement() {
    return this.container;
  }
}

export default Component;
