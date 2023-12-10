import createElement from '../../../utils/createElement';
import Component from '../../template/component';

class ChooseCategoryBtn extends Component {
  constructor(prop, type) {
    super('div', 'choose-category-wrap');
    this.prop = prop;
    this.type = type;

    this.createElements();
    this.appendElements();
  }

  createElements() {
    this.input = createElement({ tagName: 'input' });
    this.input.id = this.prop.id;
    this.input.type = this.type;
    this.input.name = this.prop.name;

    this.label = createElement({ tagName: 'label', className: 'choose-category' });
    this.label.htmlFor = this.prop.id;

    this.icon = createElement({ tagName: 'span', text: this.prop.icon });
    this.text = createElement({ tagName: 'span', text: this.prop.text });

    if (this.prop.value) {
      this.input.value = this.prop.value;
    }
  }

  appendElements() {
    this.container.append(this.input);
    this.container.append(this.label);

    this.label.append(this.icon);
    this.label.append(this.text);
  }
}

export default ChooseCategoryBtn;
