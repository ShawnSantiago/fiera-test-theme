if (!window.customElements.get("product-card-test")) {
    customElements.define("product-card-test", class ProductCardTest extends HTMLElement {
        connectedCallback() {
            this.addEventListener("click", this.handleClick.bind(this))

        }
        handleClick(event) {
            const url = this.getAttribute("url");

            window.open(url, "_blank");
        }
    });
}