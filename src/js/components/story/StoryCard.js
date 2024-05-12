import { msg, updateWhenLocaleChanges } from "@lit/localize";
import { html } from "lit";
import LitWithoutShadowDom from "../base/LitWithoutShadowDom";

class StoryCard extends LitWithoutShadowDom {
  static properties = {
    story: { type: Object },
  };

  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }

  render() {
    return html`
      <div class="card col">
        <img
          src=${this.story.photoUrl}
          class="card-img-top"
          style="height: 15rem; object-fit: cover;"
          alt="${this.story.name}'s image"
          loading="lazy"
        />
        <div class="card-body">
          <h5 class="card-title text-truncate">${this.story.name}</h5>
          <p class="card-text text-truncate">${this.story.description}</p>
          <button
            class="btn btn-primary w-100"
            data-bs-toggle="modal"
            data-bs-target="#storyModal"
            @click=${this._setStoryModalContent}
          >
            ${msg(`Lihat detail`)}
          </button>
        </div>
      </div>
    `;
  }

  _setStoryModalContent() {
    document.querySelector("story-modal").story = this.story;
    document.querySelector("story-modal").renderMode = "content";
  }
}

customElements.define("story-card", StoryCard);
