<script>
import { store } from "../../data/store";
export default {
  data() {
    return {
      store,
      imgPath: "../../../../public/img/coach/",
    };
  },
};
</script>
<template>
  <div class="bg" v-for="(item, index) in store.coachBG" :key="index">
    <div :id="item.id" class="">
      <img :src="`${imgPath}${item.img}`" :alt="item" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/partials/general" as *;
@use "../../assets/scss/partials/variables" as *;

.bg {
  position: relative;
  width: 100%;
  #shape-0,
  #shape-1,
  #shape-2,
  #shape-3 {
    position: absolute;
  }

  #shape-1,
  #shape-3 {
    aspect-ratio: 1;
  }

  #shape-0 {
    width: 680px;
    height: 600px;
    transform: rotate(235deg);
    left: -140px;
    top: 38px;
    z-index: 4;
  }

  #shape-1 {
    height: 200px;

    // width: 123px;
    right: -40px;
    top: 180px;
    z-index: 3;
  }
  #shape-2 {
    width: 100%;
    top: 30px;
    z-index: 2;
  }
  #shape-3 {
    width: 430px;
    top: 180px;
    right: 210px;
    z-index: 1;
  }
}
</style>
