<script>
import { store } from "../data/store";
import Coach from "./partials/Coach.vue";
export default {
  components: {
    Coach,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <Coach />
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/general" as *;
@use "../assets/scss/partials/variables" as *;
</style>
