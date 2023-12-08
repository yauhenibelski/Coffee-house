import createElement from '../../../utils/createElement';
import Component from '../../template/component';
import { redirectTo } from '../../../utils/redirectTo';
import { routes } from '../../../utils/routes';
import video from '../../../../assets/video.mp4';

class Enjoy extends Component {
  constructor() {
    super('section', 'enjoy');

    this.createElements();
    this.appendElements();

    Enjoy.video = this.video;
    this.menuBtn.onclick = () => redirectTo(routes.menu);
  }

  createElements() {
    this.offerBlock = createElement({ tagName: 'div', className: 'offerBlock' });
    this.headline = createElement({ tagName: 'h1', text: '<span>Enjoy</span> premium coffee at our charming cafe' });
    this.text = createElement({ tagName: 'p', text: 'With its inviting atmosphere and delicious coffee options, the Coffee House Resource is a popular destination for coffee lovers and those seeking a warm and inviting space to enjoy their favorite beverage.' });
    this.menuBtn = createElement({ tagName: 'div', className: 'menu-btn' });
    this.menuBtnText = createElement({ tagName: 'p', text: 'Menu' });
    this.content = createElement({ tagName: 'div', className: 'content' });

    this.videoContainer = createElement({ tagName: 'div', className: 'video-container' });

    this.video = createElement({ tagName: 'video' });
    this.video.src = video;
    this.video.autoplay = 'true';
    this.video.loop = 'true';
    this.video.muted = 'false';

    // console.dir(this.video)
  }

  appendElements() {
    this.menuBtn.append(this.menuBtnText);

    this.offerBlock.append(this.headline);
    this.offerBlock.append(this.text);
    this.offerBlock.append(this.menuBtn);

    this.content.append(this.offerBlock);
    this.content.append(this.videoContainer);

    this.videoContainer.append(this.video);

    this.contentContainer.append(this.content);
    this.container.append(this.contentContainer);
  }
}

export default Enjoy;
