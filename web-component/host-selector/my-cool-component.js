class MyCoolComponent extends HTMLElement{
    constructor(){
        super();
        this._shadowRoot = this.attachShadow({mode: 'open'})
        this._style = document.createElement('style')
    }
    connectedCallback(){
        this.render();
    }

    updateStyle(){
        this._style.textContent = `
        :host {
        display: block;
        background-color: darkgrey;
      }
      :host(.text-beige) {
        color: beige;
      }

      :host-context(main) {
        background-color: lightblue;
      }`
    }
    render(){
        this.updateStyle()
        const template = `
        ${this._style.outerHTML}
        <div><slot></slot>
        </div>
        `
        this._shadowRoot.innerHTML = template
    }
}
customElements.define('my-cool-component', MyCoolComponent)