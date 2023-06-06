class FooterBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <footer>
            <p>Resto Apps &#169; 2023, Mohamad Iqbal</p>
        </footer>
        `;
  }
}

customElements.define('footer-bar', FooterBar);
