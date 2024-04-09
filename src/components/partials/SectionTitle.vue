<script>
import { store } from "../../data/store.js";

export default {
  props: {
    info: Object,
  },
  data() {
    return {
      store,
      imgPath: "../../../../public/img/title/",
    };
  },
};
</script>
<template>
  <div
    class="title d-flex flex-column justify-content-center align-items-center"
  >
    <img :src="`${imgPath}${info.sectionName}`" alt="" />
    <h2 class="mb-5">{{ info.sectionText }}</h2>
  </div>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/partials/general" as *;
@use "../../assets/scss/partials/variables" as *;

.title {
  width: 100%;
  z-index: 20;
  img {
    height: 73px;
    width: 283px;
  }

  h2 {
    text-align: center;
    font-weight: bolder;
    font-size: 2.2em;
    line-height: 50px;
    width: 574px;
  }
}
</style>
