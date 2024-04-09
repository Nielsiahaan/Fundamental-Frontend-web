class BlogList extends HTMLElement {
  constructor() {
    super();

    this._blogList = [];

    this._style = document.createElement("style");
  }

  setBlogList(value) {
    this._blogList = value;

    // Render ulang setelah `blogList` di-update
    this.render();
  }

  connectedCallback() {
    this.render();
  }

  updateStyle() {
    this._style.textContent = `
        blog-list {
          display: grid;
  
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }
      `;
  }

  render() {
    this.updateStyle();

    const blogItemElements = this._blogList.map((item) => {
      const blog = document.createElement("blog-item");
      blog.setBlog(item);

      return blog;
    });

    this.innerHTML = "";
    this.append(this._style, ...blogItemElements);
  }
}

customElements.define("blog-list", BlogList);
