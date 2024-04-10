<script>
import { store } from "../../data/store.js";
import SectionTitle from "./SectionTitle.vue";
export default {
  components: {
    SectionTitle,
  },
  data() {
    return {
      store,
    };
  },
};
</script>
<template>
  <div class="container-fluid">
    <div class="container-xl">
      <SectionTitle :info="store.title.upcoming" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/partials/general" as *;
@use "../../assets/scss/partials/variables" as *;
.container-xl {
  margin-top: 90px;
}
</style>
