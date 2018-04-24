class Drumkit extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });

    const pre = document.createElement('pre');
    pre.textContent = 'Hello, world!'

    shadow.appendChild(pre);
  }
}

customElements.define('drumkit-app', Drumkit);

