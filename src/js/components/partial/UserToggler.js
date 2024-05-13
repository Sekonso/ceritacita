import { html } from "lit";
import LitWithoutShadowDom from "../base/LitWithoutShadowDom";

class UserToggler extends LitWithoutShadowDom {
  static properties = {
    username: { type: String },
  };

  constructor() {
    super();
  }

  render() {
    return html`
      <div class="btn-group">
        <button
          type="button"
          class="btn btn-dark rounded-end"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          ${this.username}
        </button>
        <ul class="dropdown-menu">
          <button class="dropdown-item" id="logoutBtn">Log out</button>
        </ul>
      </div>
    `;
  }
}

customElements.define("user-toggler", UserToggler);
