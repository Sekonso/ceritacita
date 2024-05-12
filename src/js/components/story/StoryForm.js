import { html } from "lit";
import { msg, updateWhenLocaleChanges } from "@lit/localize";
import LitWithoutShadowDom from "../base/LitWithoutShadowDom";

class StoryForm extends LitWithoutShadowDom {
  static properties = {
    renderMode: { type: String, reflect: true },
    errorMessage: { type: String },
  };

  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }

  render() {
    return html`
      <h1 class="text-center fw-bold py-4">${msg(`Tambahkan Ceritamu`)}</h1>
      <form class="needs-validation" id="storyForm" novalidate>
        <div class="mb-3">
          <label for="descriptionInput" class="form-label fs-4 fw-semibold pb-2"
            >${msg(`Deskripsi`)}</label
          >
          <textarea
            class="form-control"
            placeholder="${msg(`Masukkan deskripsi ceritamu...`)}"
            id="descriptionInput"
            style="height: 100px"
            required
          ></textarea>
          <div class="invalid-feedback">${msg(`Deskripsi harus diisi.`)}</div>
        </div>
        <div class="mb-3">
          <label for="imageFileInput" class="form-label fs-4 fw-semibold pb-2">
            ${msg(`Gambar`)}
          </label>
          <input class="form-control" type="file" accept="image/*" id="photoInput" required />
          <div class="invalid-feedback">${msg(`Gambar harus dipilih.`)}</div>
        </div>
        ${this._renderAlertContent()}
        <button type="submit" class="btn btn-primary w-100 my-3">
          ${this._renderButtonContent()}
        </button>
      </form>
    `;
  }

  _renderButtonContent() {
    if (this.renderMode === "loading")
      return html`<div class="spinner-border" role="status"></div>`;

    // else
    return html`${msg(`Kirim`)}`;
  }

  _renderAlertContent() {
    if (this.renderMode === "error") {
      return html`
        <div class="alert alert-danger" role="alert">
          ${msg(`Gagal menambahkan cerita: (error: ${this.errorMessage})`)}
        </div>
      `;
    }
    if (this.renderMode === "success") {
      return html`
        <div class="alert alert-success" role="alert">${msg(`Berhasil menambahkan cerita`)}</div>
      `;
    }

    return "";
  }
}

customElements.define("story-form", StoryForm);
