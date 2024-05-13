import { html } from "lit";
import LitWithoutShadowDom from "../base/LitWithoutShadowDom";

class RegisterView extends LitWithoutShadowDom {
  static properties = {
    renderMode: { type: String, reflect: true },
    errorMessage: { type: String },
  };

  constructor() {
    super();
  }

  render() {
    return html`
      <form class="form needs-validation border p-4" id="registerForm" novalidate>
        <h1 class="text-center mb-5">Register</h1>
        <div class="mb-3">
          <label for="nameInput" class="mb-2">Nama</label>
          <input
            type="text"
            class="form-control"
            id="nameInput"
            placeholder="masukkan nama"
            required
          />
          <div class="invalid-feedback">Nama harus diisi.</div>
        </div>
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
        <p class="text-center">Sudah punya akun? <a href="/auth/login.html">Login</a></p>
      </form>
    `;
  }

  _renderButtonContent() {
    if (this.renderMode === "loading")
      return html`<div class="spinner-border" role="status"></div>`;

    // else
    return html`Registrasi`;
  }

  _renderAlertContent() {
    if (this.renderMode === "error") {
      return html` <div class="alert alert-danger" role="alert">${this.errorMessage}</div> `;
    }
    if (this.renderMode === "success") {
      return html`
        <div class="alert alert-success" role="alert">Berhasil melakukan registrasi</div>
      `;
    }

    return "";
  }
}

customElements.define("register-view", RegisterView);
