import DrumkitButton from './components/drumkit-button.js';
import {html, render} from './node_modules/lit-html/lit-html.js';

class Drumkit extends HTMLElement {
  constructor() {
    super();

    this.buttons = [
      { audio: '/sounds/boom.wav', name: 'boom', key: 'a' },
      { audio: '/sounds/clap.wav', name: 'clap', key: 's' },
      { audio: '/sounds/hihat.wav', name: 'hihat', key: 'd' },
      { audio: '/sounds/kick.wav', name: 'kick', key: 'f' },
      { audio: '/sounds/openhat.wav', name: 'openhat', key: 'g' },
      { audio: '/sounds/ride.wav', name: 'ride', key: 'h' },
      { audio: '/sounds/snare.wav', name: 'snare', key: 'j' },
      { audio: '/sounds/tink.wav', name: 'tink', key: 'k' },
      { audio: '/sounds/tom.wav', name: 'tom', key: 'l' },
    ];

    this.attachShadow({ mode: 'open' })
    this.render();

    window.addEventListener('keypress', ({ key }) => {
      const eKey = e => e.key;

      if (this.buttons.map(eKey).includes(key)) {
        this.clickButton(this.buttons.map(eKey).indexOf(key));
      }
    });
  }

  clickButton(index) {
    const button = this.shadowRoot.querySelector(`drumkit-button:nth-of-type(${index+1})`);

    return button.play();
  }

  get renderButton() {
    return button => html`
      <drumkit-button .audioUrl=${button.audio} .name=${button.name}>
        <span slot="text">${button.key}</span>
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

