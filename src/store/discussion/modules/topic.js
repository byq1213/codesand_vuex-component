import Vue from "vue";

export default {
  namespace: true,
  state: {
    pageStateMap: {}
  },
  mutations: {
    CHANGE_PAGESTATE(state, { key, value }) {
      console.log("change pageStateMap", { key, value });

      Vue.set(state.pageStateMap, key, value);
      console.log("currentPageState changed", state.pageStateMap);
    }
  },
  actions: {
    async ACTION_CHANGE({ commit }) {
      console.log("start change pageStateMap");
      setTimeout(() => {
        commit("CHANGE_PAGESTATE", {
          key: "testKey",
          value: {
            a: 1,
            b: 2
          }
        });
      }, 3000);
    }
  }
};
