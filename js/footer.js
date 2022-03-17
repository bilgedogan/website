class CustomFooter extends HTMLElement{
    connectedCallBack(){
        this.innerHTML = `
        <footer class="footer">
            <div class="container-fluid">
                <div class="row">
                    <div class="col align-middle">
                        <p class="text-center fw-bold">
                            Nadide Bilge Doğan
                        </p>
                        <p class="text-center">
                            Computer Engineering Student at Istanbul Technical University
                        </p>
                    </div>
                </div>
                <div class="row">
                    <!--Social Media-->
                    <section class="text-center align-middle">
                        <a href="https://github.com/bilgedogan" target="_blank" class="btn"><i class="fa fa-github"></i></a>
                        <a href="https://www.linkedin.com/in/nadide-bilge-doğan-479713198" target="_blank" class="btn"><i class="fa fa-linkedin"></i></a>
                    </section>
                </div>
            </div>
        </footer>
        `
    }
}

customElements.define('nbd-footer',CustomFooter)