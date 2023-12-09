import Component from '../../template/component';

class Popup extends Component {
  constructor(content) {
    super('div', 'popup-container');
    this.content = content;
    Popup.elem = this;
  }

  remove() {
    this.container.style.opacity = 0;
    document.body.style.overflow = '';
    setTimeout(() => { this.container.remove(); }, 200);
  }

  createPopup() {
    this.container.style.opacity = 0;
    this.container.append(this.content);
    document.body.style.overflow = 'hidden';

    this.content.onclick = (elem) => elem.stopPropagation();
    this.container.onclick = () => this.remove();

    setTimeout(() => {
      this.container.style = '';
    }, 100);
  }

  render() {
    this.createPopup();
    return this.container;
  }
}
Popup.run = (content, color) => {
  document.body.append(new Popup(content).render());
};

export default Popup;