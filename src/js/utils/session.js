import Config from "../config/config";

const Session = {
  setUserToken(value) {
    return sessionStorage.setItem(Config.USER_TOKEN_KEY, value);
  },
  getUserToken() {
    return sessionStorage.getItem(Config.USER_TOKEN_KEY);
  },
  destroyUserToken() {
    return sessionStorage.removeItem(Config.USER_TOKEN_KEY);
  },
  setUserName(value) {
    return sessionStorage.setItem(Config.USER_NAME, value);
  },
  getUserName() {
    return sessionStorage.getItem(Config.USER_NAME);
  },
  destroyUserName() {
    return sessionStorage.removeItem(Config.USER_NAME);
  },
};

export default Session;
