import { html } from "lit";
import LitWithoutShadowDom from "./base/LitWithoutShadowDom";
import data from "../data/data.json";

class StoryList extends LitWithoutShadowDom {
  static properties = {
    stories: { type: Object },
  };

  constructor() {
    super();

    this.stories = data;
  }

  render() {
    const storiesElements = this.stories.listStory.map((story) => {
      const storyCard = document.createElement("story-card");
      storyCard.story = story;

      return storyCard;
    });

    return html`
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">${storiesElements}</div>
    `;
  }
}

customElements.define("story-list", StoryList);
