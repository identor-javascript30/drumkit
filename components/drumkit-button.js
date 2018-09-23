import {html, render} from '../node_modules/lit-html/lit-html.js';

export default class DrumkitButton extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });

    this.button = document.createElement('button');
    this.button.addEventListener('click', this.click.bind(this));
    render(html`<kbd><slot name="text"></slot></kbd>`, this.button);

    this.render();
  }

  get template() {
    return html`
      <style>
        button {
          border: .4rem solid black;
          border-radius: .5rem;
          margin: 1rem;
          font-size: 1.5rem;
          padding: 1rem .5rem;
          transition: all .07s ease;
          width: 10rem;
          text-align: center;
          color: white;
          background: rgba(0,0,0,0.4);
          text-shadow: 0 0 .5rem black;
        }

        .playing {
          transform: scale(1.1);
          border-color: #ffc600;
          box-shadow: 0 0 1rem #ffc600;
        }

        kbd {
          display: block;
          font-size: 4rem;
        }

        .sound {
          font-size: 1.2rem;
          text-transform: uppercase;
          letter-spacing: .1rem;
          color: #ffc600;
        }
      </style>

      ${this.button}
    `;
  }

  click() {
    this.button.classList.add('playing');

    setTimeout(() => this.button.classList.remove('playing'), 100);
  }

  render() {
    return render(this.template, this.shadowRoot);
  }

  static get is() {
    return 'drumkit-button';
  }
}

