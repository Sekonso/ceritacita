import axios from "axios";
import ApiEndpoint from "../config/api-endpoint";

const authToken =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJ1c2VyLWtYSHAyNDhldkNjb3FaOXMiLCJpYXQiOjE3MTUyNDc1Njl9.oJynzRJ-krmNBOxT117ESnSalM4QO587re0Wgj8OJUo";

const Stories = {
  async getAll() {
    return axios.get(ApiEndpoint.STORIES, {
      headers: {
        Authorization: authToken,
      },
    });
  },

  async add({ description, photo }) {
    const data = { description, photo };

    return axios.post(ApiEndpoint.ADD_STORIES, data, {
      headers: {
        Authorization: authToken,
        "Content-Type": "multipart/form-data",
      },
    });
  },
};

export default Stories;
