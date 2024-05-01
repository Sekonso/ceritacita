import { html } from "lit";
import { msg, updateWhenLocaleChanges } from "@lit/localize";
import LitWithoutShadowDom from "./base/LitWithoutShadowDom";

class StoryForm extends LitWithoutShadowDom {
  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }

  render() {
    return html`
      <h1 class="text-center fw-bold py-4">${msg(`Tambahkan Ceritamu`)}</h1>
      <form class="needs-validation" @submit=${this._validateForm} novalidate>
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
          <input class="form-control" type="file" accept="image/*" id="imageFileInput" required />
          <div class="invalid-feedback">${msg(`Gambar harus dipilih.`)}</div>
        </div>
        <button type="submit" class="btn btn-primary w-100 my-3">${msg(`Kirim`)}</button>
      </form>
    `;
  }

  _validateForm(event) {
    const form = document.querySelector(".needs-validation");

    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }

    form.classList.add("was-validated");
  }
}

customElements.define("story-form", StoryForm);
