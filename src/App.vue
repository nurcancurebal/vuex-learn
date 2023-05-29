<template>
  <div>
    {{ this.$store.state.title }}<br />
    {{ this.$store.getters.getTitle }}<br />
    <button @click="changeTitle()">change title</button>
  </div>
</template>

<script>
export default {
  components: {},
  methods: {
    changeTitle() {
      // this.$store.commit("setTitle", "mutations Title");

      this.$store.dispatch("setTitleActions", "actions Title");
    },
  },
};
</script>

<style>
</style>
