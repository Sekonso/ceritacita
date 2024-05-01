import { html } from "lit";
import { msg, updateWhenLocaleChanges } from "@lit/localize";
import LitWithoutShadowDom from "./base/LitWithoutShadowDom";
import data from "../data/data.json";

class StoryList extends LitWithoutShadowDom {
  static properties = {
    stories: { type: Object },
  };

  constructor() {
    super();
    updateWhenLocaleChanges(this);

    this.stories = data;
  }

  render() {
    const storiesElements = this.stories.listStory.map((story) => {
      const storyCard = document.createElement("story-card");
      storyCard.story = story;

      return storyCard;
    });

    return html`
      <h1 class="text-center fw-bold py-4">${msg(`Daftar Cerita`)}</h1>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-5">${storiesElements}</div>
    `;
  }
}

customElements.define("story-list", StoryList);
