import { html } from "lit";
import { msg, updateWhenLocaleChanges } from "@lit/localize";
import LitWithoutShadowDom from "../base/LitWithoutShadowDom";

class StoryList extends LitWithoutShadowDom {
  static properties = {
    stories: { type: Array },
    renderMode: { type: String, reflect: true },
    errorMessage: { type: String },
  };

  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }

  render() {
    if (this.renderMode === "loading") return this._renderLoading();
    if (this.renderMode === "error") return this._renderError();
    if (this.renderMode === "content" && this.stories.length > 0) return this._renderContent();

    return this._renderEmpty();
  }

  _renderEmpty() {
    return html`
      <div class="render-container">
        <h1 class="text-center fw-bold py-4">${msg(`Daftar cerita masih kosong`)}</h1>
      </div>
    `;
  }

  _renderLoading() {
    return html`
      <div class="render-container">
        <div class="spinner-border text-primary" role="status"></div>
        <h3>${msg(`Memuat data`)}</h3>
      </div>
    `;
  }

  _renderError() {
    return html`
      <div class="render-container">
        <h1 class="text-center fw-bold py-4">${msg(`Error`)}</h1>
        <h2 class="text-center fw-regular py-2">${this.errorMessage || "Render error"}</h2>
      </div>
    `;
  }

  _renderContent() {
    return html`
      <h1 class="text-center fw-bold py-4">${msg(`Daftar Cerita`)}</h1>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-5">
        ${this._generateStoryCards(this.stories)}
      </div>
    `;
  }

  _generateStoryCards(stories) {
    return stories.map((story) => {
      const storyCard = document.createElement("story-card");
      storyCard.story = story;

      return storyCard;
    });
  }
}

customElements.define("story-list", StoryList);
