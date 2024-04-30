import { html } from "lit";
import LitWithoutShadowDom from "./base/LitWithoutShadowDom";

class StoryCard extends LitWithoutShadowDom {
  static properties = {
    story: { type: Object },
  };

  constructor() {
    super();
  }

  render() {
    return html`
      <div class="card col" style="width: 18rem;">
        <img
          src=${this.story.photoUrl}
          class="card-img-top"
          alt="${this.story.name}'s image"
          loading="lazy"
        />
        <div class="card-body">
          <h5 class="card-title text-truncate">${this.story.name}</h5>
          <p class="card-text text-truncate">${this.story.description}</p>
          <a
            href="#"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            @click=${this._changeModalDetail}
          >
            Lihat detail
          </a>
        </div>
      </div>
    `;
  }

  _changeModalDetail() {
    document.querySelector("story-modal").story = this.story;
  }
}

customElements.define("story-card", StoryCard);
