import DrumkitButton from './components/drumkit-button.js';
import {html, render} from './node_modules/lit-html/lit-html.js';

class Drumkit extends HTMLElement {
  constructor() {
    super();

    this.buttons = [ 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l' ];

    this.attachShadow({ mode: 'open' })
    this.render();

    window.addEventListener('keypress', ({ key }) => {
      if (this.buttons.includes(key)) {
        this.clickButton(this.buttons.indexOf(key));
      }
    });
  }

  clickButton(index) {
    const button = this.shadowRoot.querySelector(`drumkit-button:nth-of-type(${index+1})`);

    return button.click();
  }

  get renderButton() {
    return button => html`
      <drumkit-button>
        <span slot="text">${button}</span>
      </drumkit-button>
    `;
  }

  get template() {
    return html`
      <style>
        :host {
          display: flex;
          contain: content;
          flex: 1;
          min-height: 100vh;
          align-items: center;
          justify-content: center;
        }
      </style>

      ${this.buttons.map(this.renderButton)}
    `;
  }

  render() {
    return render(this.template, this.shadowRoot);
  }

  static get is() {
    return 'drumkit-app';
  }
}

customElements.define(Drumkit.is, Drumkit);
customElements.define(DrumkitButton.is, DrumkitButton);

