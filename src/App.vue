<template>
  <div id="app">
    <h1>app</h1>
    <my-comp></my-comp>
    <!-- <subApp></subApp> -->
  </div>
</template>

<script>
import MyComp from "./components/MyComp";
// import subApp from "./subMain";
// console.log(subApp);
console.log(MyComp.render);
export default {
  name: "App",
  components: {
    MyComp,
    // subApp,
  },
  mounted() {
    // this.$store.dispatch("discussion/topic/ACTION_CHANGE");
  },
};
</script>

<style>
</style>
