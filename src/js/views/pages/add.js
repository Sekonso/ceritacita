import Stories from "../../network/stories";

const Add = {
  async init() {
    this.initEventListener();
  },

  async initEventListener() {
    const storyForm = document.querySelector("#storyForm");

    storyForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      event.stopPropagation();
      storyForm.classList.add("was-validated");

      if (storyForm.checkValidity()) {
        await this._sendStory();
      }
    });
  },

  async _sendStory() {
    try {
      document.querySelector("story-form").renderMode = "loading";

      const res = await Stories.add(this._getFormdata());

      console.log(res);
      this._clearFormData();
      setTimeout(() => {
        document.querySelector("story-form").renderMode = "done";
        window.location.href = "/";
      }, 2000);
    } catch (error) {
      document.querySelector("story-form").renderMode = "error";
      document.querySelector("story-form").errorMessage = error;
    }
  },

  _getFormdata() {
    const descriptionInput = document.querySelector("#descriptionInput");
    const photoInput = document.querySelector("#photoInput");

    return {
      description: descriptionInput.value,
      photo: photoInput.files[0],
    };
  },

  _clearFormData() {
    document.querySelector("story-form").renderMode = "success";
    document.querySelector("#descriptionInput").value = "";
    document.querySelector("#photoInput").value = "";
    document.querySelector("form").classList.remove("was-validated");
  },
};

export default Add;
