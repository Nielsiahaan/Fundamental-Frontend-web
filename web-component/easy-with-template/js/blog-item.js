class BlogItem extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._template = document
      .querySelector("template#blogItem")
      .content.cloneNode(true);
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this._shadowRoot.appendChild(this._template);
  }
}

customElements.define("blog-item", BlogItem);
