<template>
  <div id="subApp">
    subApp
    <my-comp></my-comp>
  </div>
</template>

<script>
import MyComp from "./components/MyComp";
export default {
  name: "subApp",
  components: {
    MyComp,
  },
};
</script>

<style>
</style>