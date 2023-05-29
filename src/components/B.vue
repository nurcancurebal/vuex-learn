<template>
  <div>
    {{ this.$store.getters.getTitle }}
    <input
      v-model="title"
      :placeholder="$store.getters.getTitle"
      @keyup.enter="sendTitle()"
    />
  </div>
</template>

<script>
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