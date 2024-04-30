import { html } from "lit";
import LitWithoutShadowDom from "./base/LitWithoutShadowDom";

class StoryModal extends LitWithoutShadowDom {
  static properties = {
    story: { type: Object },
  };

  constructor() {
    super();

    this.story = {
      id: undefined,
      name: undefined,
      description: undefined,
      photoUrl: undefined,
      createdAt: undefined,
    };
  }

  render() {
    return html`
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Detail cerita</h1>
            </div>
            <div class="modal-body">
              <img
                src=${this.story.photoUrl}
                class="card-img-top mb-2"
                alt="${this.story.name}'s image"
                loading="lazy"
              />
              <h2>${this.story.name}</h2>
              <p class="badge text-bg-secondary px-2">${this._convertTime(this.story.createdAt)}</p>
              <p>${this.story.description}</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Tutup</button>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  _convertTime(timestamp) {
    const date = new Date(timestamp);

    const options = {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    };

    return date.toLocaleDateString("id-ID", options);
  }
}

customElements.define("story-modal", StoryModal);
