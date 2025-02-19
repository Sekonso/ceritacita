import axios from "axios";
import Config from "../config/config";
import Session from "../utils/session";

// API request instance
const api = axios.create({
  baseURL: Config.baseURL,
  timeout: 15000,
  headers: { Authorization: `Bearer ${Session.getUserToken()}` },
});

// Response handler
api.interceptors.response.use(undefined, (error) => {
  console.log(error);

  if (error.response) {
    throw error.response.data.message;
  } else if (error.request) {
    throw error.message;
  } else {
    throw error;
  }
});

const Stories = {
  async getAll() {
    return api.get("/stories");
  },

  async add(data) {
    return api.post("/stories", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
};

export default Stories;
