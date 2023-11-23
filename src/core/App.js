import HomePage from './pages/home/home';

class App {
  constructor() {
    this.container = document.body;
  }

  run() {
    this.container.append(new HomePage().getElement());
  }
}

export default App;
