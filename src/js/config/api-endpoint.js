import Config from "./config";

const ApiEndpoint = {
  REGISTER: `${Config.baseURL}/register`,
  LOGIN: `${Config.baseURL}/login`,

  STORIES: `${Config.baseURL}/stories`,
  STORIES_DETAIL: `${Config.baseURL}/stories:id`,

  ADD_STORIES: `${Config.baseURL}/stories`,
  ADD_STORIES_GUEST: `${Config.baseURL}/stories/guest`,
};

export default ApiEndpoint;
