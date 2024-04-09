<script>
import { store } from "../../data/store.js";
export default {
  data() {
    return {
      store,
      imgPath: "../../../../public/img/yt/",
    };
  },
};
</script>
<template>
  <div class="container-fluid h-100 bg-yt">
    <div class="" v-for="(item, index) in store.youtube" :key="index">
      <div :id="item.id" class="">
        <img :src="`${imgPath}${item.img}`" :alt="item.img" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bg-yt {
  width: 100%;
  margin-top: 137px;

  #img-0,
  #img-1,
  #img-2,
  #img-3,
  #img-4,
  #img-5,
  #img-6 {
    position: absolute;
  }

  #img-0 {
    width: 968px;
    height: 568px;
    top: 60px;
    left: 944px;
    transform: translate(-50%);
    z-index: 8;
  }

  #img-1 {
    width: 87px;
    aspect-ratio: 1;
    top: 190px;
    right: 425px;
    z-index: 9;
  }

  #img-2 {
    left: 50%;
    bottom: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
  }

  #img-3 {
    top: 43px;
    left: 433px;
    z-index: 7;
  }
  #img-4 {
    bottom: 73px;
    right: 380px;
    z-index: 6;
  }
  #img-5 {
    width: 280px;
    aspect-ratio: 1;
    z-index: 5;
    transform: rotate(190deg);
    left: 290px;
    top: -40px;
  }
  #img-6 {
    width: 100%;
    bottom: -50px;
  }
}
</style>
