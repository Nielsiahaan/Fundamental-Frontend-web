class BlogItem extends HTMLElement {
  constructor() {
    super();

    this._blog = {
      id: 0,
      title: "NEED_TITLE",
      shortDescription: "NEED_SHORT_DESCRIPTION",
    };

    this._style = document.createElement("style");
  }

  setBlog(value) {
    this._blog["id"] = value.id;
    this._blog["title"] = value.title;
    this._blog["shortDescription"] = value.shortDescription;

    // Render ulang setelah `blog` di-update
    this.render();
  }

  connectedCallback() {
    this.render();
  }

  updateStyle() {
    this._style.textContent = `
        blog-item {
          padding: 1rem 0.8rem;
          display: block;
  
          border-radius: 4px;
          box-shadow: 0 0 2px 2px #3333333377;
        }
  
        .blog__title {
          margin-block-start: 0;
          margin-block-end: 1rem;
  
          font-size: 1.3em;
          font-weight: bold;
        }
  
        p {
          margin-block-start: 0;
        }
      `;
  }

  render() {
    this.updateStyle();

    this.setAttribute("data-id", this._blog.id);

    this.innerHTML = `
        ${this._style.outerHTML}
  
        <h5 class="blog__title">
          <a href="#">${this._blog.title}</a>
        </h5>
        <div class="blog__description">
          <p>${this._blog.shortDescription}</p>
        </p>
      `;
  }
}

customElements.define("blog-item", BlogItem);
