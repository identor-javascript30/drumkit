import {html, render} from 'https://unpkg.com/lit-html@0.11.4/lit-html.js';

export default class DrumkitButton extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });

    this.button = document.createElement('button');
    this.button.addEventListener('click', this.play.bind(this));
    render(html`
        <kbd><slot name="text"></slot></kbd>
        <p>${this.name}</p>
      `,
      this.button
    );

    this.audio = document.createElement('audio');
    this.audio.hidden = true;
    this.audio.src = this.audioUrl;

    this.render();
  }

  play() {
    this.button.classList.add('playing');
    this.audio.currentTime = 0;
    this.audio.play();

    this.button.addEventListener('transitionend', ({ propertyName }) => {
      if (propertyName === 'transform') {
        this.button.classList.remove('playing');
      }
    });
  }

  render() {
    const template = html`
      <style>
        button {
          border: .1rem solid black;
          transition: all .07s ease;
          width: 5rem;
        }

        .playing {
          transform: scale(1.1);
          border-color: #ffc600;
          box-shadow: 0 0 1rem #ffc600;
        }

        kbd {
          display: block;
          font-size: 2rem;
        }

        .sound {
          text-transform: uppercase;
          letter-spacing: .1rem;
          color: #ffc600;
        }
      </style>

      ${this.button}
      ${this.audio}
    `;

    return render(template, this.shadowRoot);
  }
}

