import { html } from "lit";
import { msg, str, updateWhenLocaleChanges } from "@lit/localize";
import LitWithoutShadowDom from "../base/LitWithoutShadowDom";

class StoryModal extends LitWithoutShadowDom {
  static properties = {
    story: { type: Object },
    renderMode: { type: String, reflect: true },
  };

  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }

  render() {
    return html`
      <div
        class="modal fade"
        id="storyModal"
        tabindex="-1"
        aria-labelledby="storyModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">${msg(`Detail cerita`)}</h1>
            </div>
            <div class="modal-body">${this._renderBody()}</div>
            <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-bs-dismiss="modal">
                ${msg(`Tutup`)}
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  _renderBody() {
    if (this.renderMode === "content") return this._renderContent();
    return this._renderEmpty();
  }

  _renderEmpty() {
    return html`<h1 class="text-center fw-bold py-4">${msg(`Data kosong`)}</h1>`;
  }

  _renderContent() {
    return html`
      <img
        src=${this.story.photoUrl}
        class="card-img-top mb-2"
        alt="${this.story.name}'s image"
        loading="lazy"
      />
      <h2>${this.story.name}</h2>
      <p class="badge text-bg-secondary px-2">
        ${msg(str`Dibuat pada tanggal: ${this._convertTime(this.story.createdAt)}`)}
      </p>
      <p>${this.story.description}</p>
    `;
  }

  _convertTime(timestamp) {
    const date = new Date(timestamp);

    const options = {
      day: "numeric",
      month: "numeric",
      year: "numeric",
    };

    return date.toLocaleDateString("id-ID", options);
  }
}

customElements.define("story-modal", StoryModal);
