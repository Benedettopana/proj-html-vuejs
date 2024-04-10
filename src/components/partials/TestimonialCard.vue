<script>
export default {
  props: {
    info: Object,
  },
  data() {
    return {
      imgPath: "../../../../public/img/testimonial/",
    };
  },
};
</script>
<template>
  <div class="testimonial-card">
    <p class="me">{{ info.me }}</p>
    <p class="about-me">
      {{ info.about }}
    </p>
    <div class="d-flex">
      <div class="profile d-flex justify-content-center">
        <div class="canvas">
          <img class="" :src="`${imgPath}${info.img}`" alt="" />
        </div>
      </div>
      <div class="me">
        <p class="card-name">{{ info.name }}</p>
        <p class="card-activity">{{ info.activity }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/partials/general" as *;
@use "../../assets/scss/partials/variables" as *;

.testimonial-card {
  width: 570px !important;
  height: 380px;
  background-color: $color-white;
  padding: 40px 50px;

  .me,
  .about-me {
    text-align: start;
  }
  .me,
  .card-name {
    font-weight: bold;
    // font-size: 1.1em;
  }

  .about-me,
  .card-activity {
    color: $color-boulder;
    font-size: 0.95em;
    // font-weight: 400;
  }
  .card-name,
  .card-activity {
    font-size: 0.8em;
  }

  .profile {
    width: 30%;
    // color: red;

    .canvas {
      width: 80px;
      // aspect-ratio: 1;
      overflow: hidden;
      border-radius: 50%;
      img {
        overflow: hidden;
        object-fit: contain;
      }
    }
  }
  .me {
    width: 70%;
  }
}
</style>
