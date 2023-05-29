<template>
  <div>
    <label>
      <input type="text" v-model="title" />
    </label>

    <button @click="sendTitle">Send Title</button>
  </div>
</template>

<script>
// import { defineComponent } from "@vue/composition-api";

export default {
  data() {
    return {
      title: "",
    };
  },
  methods: {
    sendTitle() {
      this.$store.dispatch("setTitleActions", this.title);
    },
  },
};
</script>
