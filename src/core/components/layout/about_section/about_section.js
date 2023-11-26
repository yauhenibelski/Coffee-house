import createElement from '../../../utils/createElement';
import Component from '../../template/component';
import getImg from '../../../utils/getImg';
import picture1 from '../../../../assets/img/about-1.png';
import picture2 from '../../../../assets/img/about-2.png';
import picture3 from '../../../../assets/img/about-3.png';
import picture4 from '../../../../assets/img/about-4.png';

class AboutSection extends Component {
  constructor() {
    super('section', 'about');
    this.container.id = 'about';

    this.createElements();
    this.appendElements();
  }

  createElements() {
    this.pictureElements = [picture1, picture3, picture2, picture4].map((img) => getImg(img));
    this.firstPicturesBox = createElement({ tagName: 'div', className: 'first-pictures-box' });
    this.secondPicturesBox = createElement({ tagName: 'div', className: 'second-pictures-box' });

    this.headline = createElement({
      tagName: 'h2',
      text: `Resource is
      <span>the perfect and cozy place</span>
      where you can enjoy a variety of hot beverages, relax, catch up with friends, or get some work done.`,
    });
    this.picturesWrap = createElement({ tagName: 'div', className: 'pictures-wrap' });
  }

  appendElements() {
    this.pictureElements.forEach((picture, i) => {
      const pictureWrap = createElement({ tagName: 'div', className: 'picture-wrap' });
      pictureWrap.append(picture);

      if (i % 2 === 0) {
        this.firstPicturesBox.append(pictureWrap);
      } else {
        this.secondPicturesBox.append(pictureWrap);
      }
    });

    this.picturesWrap.append(this.firstPicturesBox);
    this.picturesWrap.append(this.secondPicturesBox);

    this.contentContainer.append(this.headline);
    this.contentContainer.append(this.picturesWrap);

    this.container.append(this.contentContainer);
  }
}

export default AboutSection;
