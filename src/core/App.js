import Footer from './components/layout/footer/footer';
import Header from './components/layout/header/header';
import HomePage from './pages/home/home';

class App {
  constructor() {
    this.container = document.body;
  }

  run() {
    this.container.append(new Header().getElement());
    this.container.append(new HomePage().getElement());
    this.container.append(new Footer().getElement());
  }
}

export default App;
