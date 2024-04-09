class ClubSearchError extends HTMLElement {
    _shadowRoot = null;
    _style = null;

    constructor() {
        super();

        this._shadowRoot = this.attachShadow({ mode: "open" });
        this._style = document.createElement("style");
        this.render();
    }

    _updateStyle() {
        this._style.textContent = `
            .placeholder {
                font-weight: lighter;
                color: rgb(0,0,0,0.5)}
        `;
    }

    _emptyContent() {
        this._shadowRoot.innerHTML = "";
    }

    render() {
        this._shadowRoot.innerHTML = '';
    }

    render() {
        this._emptyContent();
        this._updateStyle();

        this._shadowRoot.appendChild(this._style);
        this._shadowRoot.innerHTML += `
            <div class="card">
                <div class="card-content">
                    <div class="content">
                        <h2 class="placeholder">Club Search Error</h2>
                        <slot></slot>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('club-search-error', ClubSearchError)