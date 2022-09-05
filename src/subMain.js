import Vue from "vue";
import Vuex from "vuex";
import tpl from "./subApp.vue";
import store from "./store";
console.log("sub main sun ", store);
let app = new Vue({
  store,
  el: "#subApp",
  data() {
    return {
      subTest: "subTest"
    };
  },
  // render: function (createElement) {
  //   return createElement("div", "1234");
  // },
  components: {},
  created() {
    // console.log(this.$store);
  },
  render(h) {
    return h("div", {
      attrs: {
        id: "subApp"
      }
    });
  }
});
// .$mount("#subApp");
export default app;
