<template>
  <div id="comp">
    currentPageState: {{ currentPageState }} discussionCount:
    {{ discussionCount }}
  </div>
</template>

<script>
import Vuex, { createNamespacedHelpers } from "vuex";
import modules from "../store";
// import Vue from "vue";
const { mapGetters, mapActions } = createNamespacedHelpers("discussion");
export default {
  name: "MyComp",
  store: modules,
  computed: {
    ...mapGetters({
      currentPageState: "currentPageState",
    }),
    discussionCount() {
      // 命名空间内的 state 能拿到
      return this.$store.state.discussion.discussionCount;
    },
  },
  methods: {
    ...mapActions({ change: "ACTION_CHANGE" }),
  },
  mounted() {
    this.change();

    console.log("store:", this.$store.state.discussion);
    console.log("store:", this.$store);
  },
};
</script>

<style>
</style>