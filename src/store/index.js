import Vuex from "vuex";
import Vue from "vue";
import discussion from "./discussion";
console.log("discussion", discussion);
Vue.use(Vuex);
console.warn("modules 执行, vuex used");

export default new Vuex.Store({
  modules: {
    discussion
  }
});
