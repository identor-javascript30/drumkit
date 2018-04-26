class DrumkitButton extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' })
      .appendChild(
        document
          .getElementById(DrumkitButton.is)
          .content
          .cloneNode(true)
      );
  }

  static get is() {
    return 'drumkit-button';
  }
}

customElements.define(DrumkitButton.is, DrumkitButton);

