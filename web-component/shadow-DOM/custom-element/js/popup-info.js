class PopUpInfo extends HTMLElement {
  _defaultIcon =
    "https://raw.githubusercontent.com/dicodingacademy/a163-bfwd-labs/099-shared-files/info-default.png";

  constructor() {
    super();

    // Mengaktifkan shadow DOM/Membuat shadow root
    this._shadowRoot = this.attachShadow({ mode: "open" });

    // Mendapatkan atribut
    this._imgUrl = this.getAttribute("img");
    this._description = this.getAttribute("description");

    // Styles
    this._style = document.createElement("style");
  }

  connectedCallback() {
    this.render();
  }

  updateStyle() {
    this._style.textContent = `
      .wrapper {
        position: relative;
      }

      .info {
        display: inline-block;
        padding: 12px 8px;
        border: 1px solid #333;
        border-radius: 8px;
        
        width: 200px;
        background: white;

        font-size: 0.8rem;
        
        position: absolute;
        bottom: 20px;
        left: 10px;
        
        transition: 600ms all;
        opacity: 0;
        z-index: 3;
      }

      img {
        width: 1.2rem;
      }

      .icon:hover + .info, .icon:focus + .info {
        opacity: 1;
      }
    `;
  }

  render() {
    this.updateStyle();

    const template = `
      ${this._style.outerHTML}

      <span class="wrapper">
        <span class="icon" tabindex="0">
          <img src="${this._imgUrl || this._defaultIcon}" alt="Popup Icon" />
        </span>
        <span class="info">${this._description}</span>
      </span>
    `;

    this._shadowRoot.innerHTML = template;
  }
}

customElements.define("popup-info", PopUpInfo);
