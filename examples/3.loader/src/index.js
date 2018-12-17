import './index.scss'

require('../../../assets/webpack.png')

export default class HelloWorld {
  constructor() {
  }

  test() {
    const element = window.document.createElement("h3");
    element.innerHTML = 'hello word';
    element.className = 'index'
    window.document.body.appendChild(element);
  }

  static say(){
    console.log('hello word\n')
  }
}

const helloWorld = new HelloWorld()

helloWorld.test();

HelloWorld.say();
