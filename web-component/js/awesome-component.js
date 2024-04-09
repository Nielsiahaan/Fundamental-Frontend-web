class AwesomeComponent extends HTMLElement {
  static observedAttributes = ["color", "size"];

  constructor() {
    super();

    console.log("construct");
    this.innerHTML = "Aku adalah konten yang akan tampil";
  }

  connectedCallback() {
    console.log("Custom element ditambahkan ke halaman.");
  }
  disconnectionCallback() {
    console.log("Custom element disingkirkan dari halaman.");
  }
  adoptedCallback() {
    console.log("Custom element dipindahkan ke halaman baru.");
  }
  attributeChangedCallback(name, oldValue, newValue) {
    console.log(`Attribute ${name} telah diubah`);
  }
}

customElements.define("awesome-component", AwesomeComponent);
