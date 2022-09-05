import topic from "./modules/topic";
import getters from "./getter";
export default {
  namespaced: true,
  getters,
  state: {
    discussionCount: 0
  },
  modules: {
    topic
  }
};
