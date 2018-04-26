class Drumkit extends HTMLElement {
  constructor() {
    super();

    const template = document.getElementById('drumkit-app')
      .content
      .cloneNode(true);

    // Attach buttons
    const wrapper = template.querySelector('.button-container');
    const buttons = [ 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l' ]
      .map(name => {
        const button = document.createElement('drumkit-button');

        const text = document.createElement('span');
        text.setAttribute('slot', 'text');
        text.textContent = name;

        button.appendChild(text);
        wrapper.appendChild(button);

        return button;
      });

    const shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(template);
  }
}

customElements.define('drumkit-app', Drumkit);

