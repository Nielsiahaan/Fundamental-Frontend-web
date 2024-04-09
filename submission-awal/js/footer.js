class Footer extends HTMLElement {
    constructor() {
      super();
  
      const shadow = this.attachShadow({ mode: 'open' });
  
      const template = document.createElement('template');
      template.innerHTML = `
        <style>
          /* Styling untuk footer */
          :host {
            display: block;
            text-align: center;
            padding: 10px;
            background-color: #f0f0f0;
            border-top: 1px solid #ccc;
          }
        </style>
        <div>
          <slot></slot>
        </div>
      `;
      shadow.appendChild(template.content.cloneNode(true));
    }
  }
  
  customElements.define('footer-app', Footer);
  