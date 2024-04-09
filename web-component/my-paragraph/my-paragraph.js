class MyParagraph extends HTMLElement {
  static observedAttributes = ["color", "size"];

  constructor() {
    super();

    // Menambahkan shadow root
    this._shadowRoot = this.attachShadow({ mode: "open" });

    this._color = this.getAttribute("color");
    this._size = this.getAttribute("size");

    this._style = document.createElement("style");
  }

  connectedCallback() {
    this.render();
  }

  updateStyle() {
    this._style.textContent = `
        :host {ex
          color: ${this._color};
          font-size: ${this._size}px;
        }
      `;
  }

  render() {
    this.updateStyle();

    this._shadowRoot.innerHTML = `
        ${this._style.outerHTML}
  
        <p>
          <slot>
            Aku adalah custom element paragraf dengan atribut 
            color \`${this._color}\` dan 
            size \`${this._size}\`.
          </slot>
        </p>
      `;
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this[`_${name}`] = newValue;

    // Render konten ulang
    this.render();
  }
}

customElements.define("my-paragraph", MyParagraph);
