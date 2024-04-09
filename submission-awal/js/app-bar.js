class AppBar extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });

    const template = document.createElement("template");
    template.innerHTML = `
      <style>
      /* Styling untuk app bar */
      :host {
        display: block;
        background-color: #007bff;
        color: #fff;
        padding: 10px;
        text-align: center;
        font-size: 24px;
        font-weight: bold;
        position: relative; /* Menambahkan posisi relatif untuk menempatkan navigasi */
      }
    
      /* Efek 3D */
      :host::before,
      :host::after {
        content: '';
        position: absolute;
        width: calc(100% - 20px); /* Lebar yang sedikit lebih kecil dari host */
        height: 10px;
        background: linear-gradient(90deg, rgba(0, 0, 0, 0.3), transparent); /* Efek gradien */
        bottom: -5px; /* Menempatkan efek di bawah host */
        z-index: -1; /* Mengatur kedalaman di bawah host */
      }
    
      :host::before {
        left: 0; /* Efek gradien dari kiri */
        transform: skewX(-45deg);
      }
    
      :host::after {
        right: 0; /* Efek gradien dari kanan */
        transform: skewX(45deg);
      }
    </style>
    <div>
      <slot></slot>

    </div>
    
      `;
    shadow.appendChild(template.content.cloneNode(true));
  }
}

customElements.define("app-bar", AppBar);
