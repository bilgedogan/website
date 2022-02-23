class CustomFooter extends HTMLElements{
    connectedCallBack(){
        this.innerHTML = 
        `
        <footer>
        <div class="container">
        </div>
        </footer>
        `
    }
}

customElements.define('nbd-footer',CustomFooter)