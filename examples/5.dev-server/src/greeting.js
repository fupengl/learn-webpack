export class HelloWorld {
  constructor() {
  }

  test() {
    const element = window.document.createElement("h3");
    element.innerHTML = `hello word ${process.env.mode}`;
    element.className = 'index'
    window.document.body.appendChild(element);
  }

  static say(){
    console.log('hello word\n')
  }
}
