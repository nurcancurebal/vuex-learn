<template>
  <div id="app">
    <A />
    <B />
  </div>
</template>

<script>
import A from "./components/A.vue";
import B from "./components/B.vue";

export default {
  components: {
    A,
    B,
  },
  methods: {},
};
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  flex-direction: row;
}
</style>
