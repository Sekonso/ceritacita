import { html } from "lit";
import LitWithoutShadowDom from "../base/LitWithoutShadowDom";

class NavBar extends LitWithoutShadowDom {
  static properties = {
    brandName: { type: String, reflect: true },
    currentPage: { type: String, reflect: true },
  };

  constructor() {
    super();
  }

  render() {
    return html`
      <nav class="navbar navbar-expand-lg border-bottom border-secondary py-4">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">${this.brandName}</a>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <nav-link link="/" pageName="dashboard" currentPage=${this.currentPage}></nav-link>
              <nav-link
                link="/pages/profile.html"
                pageName="profile"
                currentPage=${this.currentPage}
              ></nav-link>
              <nav-link
                link="/pages/add.html"
                pageName="add"
                currentPage=${this.currentPage}
              ></nav-link>
            </ul>
            <language-selector></language-selector>
            <user-toggler class="ms-3"></user-toggler>
          </div>
        </div>
      </nav>
    `;
  }
}

customElements.define("nav-bar", NavBar);
