class CustomFooter extends HTMLElements{
    connectedCallBack(){
        this.innerHTML = 
        `
        <footer>
        
        </footer>
        `
    }
}

customElements.define('nbd-footer',CustomFooter)