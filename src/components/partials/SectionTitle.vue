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
  <div class="d-flex flex-column justify-content-center align-items-center">
    <img :src="`${imgPath}${info.sectionName}`" alt="" />
    <h2 class="mb-5">{{ info.sectionText }}</h2>
  </div>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/partials/general" as *;
@use "../../assets/scss/partials/variables" as *;

.hero-get-started {
  // height: 100%;
  width: 100%;
  z-index: 20;
  // Posizionamento
  position: absolute;
  bottom: 235px;
  // /Posizionamento
  img {
    height: 73px;
    width: 283px;
  }

  h2 {
    // font-size: ;
    text-align: center;
    font-weight: bolder;
    font-size: 2.2em;
    // padding: 0 10px;
    line-height: 50px;
    width: 574px;
  }
}
</style>
