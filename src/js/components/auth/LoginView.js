import { html } from "lit";
import LitWithoutShadowDom from "../base/LitWithoutShadowDom";

class LoginView extends LitWithoutShadowDom {
  static properties = {
    renderMode: { type: String, reflect: true },
    errorMessage: { type: String },
  };

  constructor() {
    super();
  }

  render() {
    return html`
      <form class="form needs-validation border p-4" id="loginForm" novalidate>
        <h1 class="text-center mb-5">Login</h1>
        <div class="mb-3">
          <label for="emailInput" class="mb-2">Email</label>
          <input
            type="email"
            class="form-control"
            id="emailInput"
            placeholder="alamat@email.com"
            required
          />
          <div class="invalid-feedback">Email tidak valid</div>
        </div>
        <div class="mb-3">
          <label for="passwordInput" class="mb-2">Password</label>
          <input
            type="password"
            class="form-control"
            id="passwordInput"
            placeholder="Password"
            minlength="8"
            required
          />
          <div class="invalid-feedback">Password minimal memiliki 8 karakter</div>
        </div>
        ${this._renderAlertContent()}
        <button class="btn btn-primary w-100 mt-4 my-3" type="submit">
          ${this._renderButtonContent()}
        </button>
        <p class="text-center">Belum punya akun? <a href="/auth/register.html">Registrasi</a></p>
      </form>
    `;
  }

  _renderButtonContent() {
    if (this.renderMode === "loading")
      return html`<div class="spinner-border" role="status"></div>`;

    // else
    return html`Masuk`;
  }

  _renderAlertContent() {
    if (this.renderMode === "error") {
      return html` <div class="alert alert-danger" role="alert">${this.errorMessage}</div> `;
    }
    if (this.renderMode === "success") {
      return html` <div class="alert alert-success" role="alert">Berhasil melakukan login</div> `;
    }

    return "";
  }
}

customElements.define("login-view", LoginView);
