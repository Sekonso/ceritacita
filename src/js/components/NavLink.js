import { html } from "lit";
import LitWithoutShadowDom from "./base/LitWithoutShadowDom";

class NavLink extends LitWithoutShadowDom {
  static properties = {
    link: { type: String, reflect: true },
    pageName: { type: String, reflect: true },
    currentPage: { type: String, reflect: true },
  };

  constructor() {
    super();
  }

  render() {
    const isActive = this.pageName === this.currentPage ? "active" : "";
    const ariaCurrent = isActive ? "page" : "";

    return html`
      <li class="nav-item">
        <a class="nav-link ${isActive}" aria-current=${ariaCurrent} href=${this.link}>
          ${this.pageName}
        </a>
      </li>
    `;
  }
}

customElements.define("nav-link", NavLink);
