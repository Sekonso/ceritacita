import Stories from "../network/stories";

const Dashboard = {
  async init() {
    await this._initData();
  },

  async _initData() {
    const storyList = document.querySelector("story-list");
    storyList.renderMode = "loading";

    try {
      const res = await Stories.getAll();

      storyList.stories = res.data.listStory;
      storyList.renderMode = "content";
    } catch (error) {
      console.error("Error getting all stories data: ", error);
      storyList.renderMode = "error";
      storyList.errorMessage = error.response.data.message || error.message;
    }
  },
};

export default Dashboard;
