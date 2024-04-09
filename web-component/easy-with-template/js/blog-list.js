class BlogList extends HTMLElement {
  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._style = document.createElement("style");
  }

  connectedCallback() {
    this.render();
  }

  updateStyle() {
    this._style.textContent = `
        :host {
          display: grid;
  
          grid-template-columns: 1fr 1fr 1fr;
          gap: 1rem;
        }
      `;
  }

  render() {
    this.updateStyle();

    const slot = document.createElement("slot");
    slot.innerHTML = `
        <blog-item></blog-item>
        <blog-item></blog-item>
        <blog-item></blog-item>
      `;

    this._shadowRoot.append(this._style, slot);
  }
}

customElements.define("blog-list", BlogList);
