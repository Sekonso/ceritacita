import axios from "axios";
import Config from "../config/config";

// API request intance
const api = axios.create({
  baseURL: Config.baseURL,
  timeout: 10000,
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

const Auth = {
  async register(data) {
    return api.post("/register", data);
  },

  async login(data) {
    return api.post("/login", data);
  },
};

export default Auth;
