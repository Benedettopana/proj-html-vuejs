<script>
import { store } from "./../../data/store.js";
export default {
  data() {
    return {
      store,
    };
  },
};
</script>
<template>
  <div class="container-xxl footer-info">
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3">
      <div id="address" class="col">
        <h5 class="mb-3">{{ store.address.title }}</h5>
        <p v-for="(element, index) in store.address.info" :key="index">
          <span>{{ element }}</span>
        </p>
      </div>
      <div id="info-explore" class="col"></div>
      <div id="latest-post" class="col"></div>
    </div>
  </div>
</template>

<style lang="scss">
@use "../../assets/scss/partials/general" as *;
@use "../../assets/scss/partials/variables" as *;

.footer-info {
  height: 480px;
  #address {
    & h5 {
      font-size: 1.1em;
      font-weight: 800;
    }

    & span {
      font-size: 0.85em;
      color: $color-boulder;
    }
  }
}
</style>
