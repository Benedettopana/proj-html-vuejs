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
  <div id="instagram">
    <h5 class="mb-3">
      {{ store.instagramFooter.title }}
      <span class="ms-1">{{ store.instagramFooter.tag }}</span>
    </h5>
    <div class="row row-cols-3 mt-5">
      <div
        class="col"
        v-for="(item, index) in store.instagramFooter.photo"
        :key="index"
      >
        <a href="#"
          ><img :src="`../../../../public/img/${item}`" :alt="item"
        /></a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/partials/general" as *;
@use "../../assets/scss/partials/variables" as *;
#instagram {
  h5 {
    font-size: 1.1em;
    font-weight: 800;
  }

  span {
    font-size: 0.8em;
    color: #ef7144;
  }
}
</style>
