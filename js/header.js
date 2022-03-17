class CustomHeader extends HTMLElement{
    connectedCallBack(){
        this.innerHTML = `
        <header>

        </header>
        `
    }
}

customElements.define('nbd-header',CustomHeader)