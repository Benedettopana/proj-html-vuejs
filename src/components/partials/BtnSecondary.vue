<script>
import { store } from "../../data/store.js";
export default {
  props: {
    btnContent: Object,
  },
  data() {
    return {
      store,
    };
  },
};
</script>
<template>
  <!-- <button id="btn" type="button" class="btn btn-primary">
    {{ btnContent.content }}
  </button> -->

  <button id="btn" type="button" class="btn btn-primary type-1">
    {{ btnContent.content }}
  </button>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/partials/general" as *;
@use "../../assets/scss/partials/variables" as *;

#btn {
  width: 200px;
  height: 50px;
  font-weight: 800;
  // background-color: $color-tussock-tag;
  // Sovrascrivo Bootstrap
  --bs-btn-font-size: 0.8em !important;
  --bs-btn-border-color: none !important;
}

.type-1 {
  width: 130px !important;
  height: 32px !important;
  background-color: $btn-type-1;
  &:hover {
    background-color: $color-cerulean;
    color: $color-white;
  }
}
</style>
