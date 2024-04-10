<script>
export default {
  data() {
    return {
      imgPath: "../../../../public/img/articleBG/",
      circle: "circle.svg",
      shape5: "maxcoach-shape-05-150x150.png",
      shape14: "maxcoach-shape-14-1536x343.png",
      splash: "splashp.svg",
    };
  },
};
</script>
<template>
  <div class="bg">
    <div class="shape1">
      <img :src="`${imgPath}${shape5}`" alt="shape5" />
    </div>
    <div class="shape2">
      <img :src="`${imgPath}${shape14}`" alt="shape14" />
    </div>
    <div class="circle">
      <img :src="`${imgPath}${circle}`" alt="circle" />
    </div>
    <div class="splash">
      <img :src="`${imgPath}${splash}`" alt="splash" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/partials/general" as *;
@use "../../assets/scss/partials/variables" as *;
.bg {
  width: 100%;
  height: 100%;
  position: relative;
}
.shape1,
.shape2,
.circle,
.splash {
  position: absolute;
}
.shape1 {
  width: 163px;
  aspect-ratio: 1;

  top: 255px;
  left: 690px;
}

.shape2 {
  width: 100%;
  top: 380px;
}

.circle {
  width: 89px;
  aspect-ratio: 1;
  top: 268px;
  left: 225px;
}
.splash {
  width: 340px;
  aspect-ratio: 1;
  top: 810px;
  right: 600px;
}
</style>
