<script>
import { store } from "../../data/store";
export default {
  data() {
    // props:{}
    return {
      store,
      imgPath: "../../../../public/img/jumbotron/",
    };
  },
};
</script>
<template>
  <div class="testimonial-card">
    <p class="me">High level of eficiency and scientific teaching methods</p>
    <p class="about-me">
      I am free to learn at my own pace, follow my own schedule and choose the
      subject I want to learn from the syllabus. Great study portal for people
      like me.
    </p>
    <div class="d-flex">
      <div class="profile d-flex justify-content-center">
        <!-- <img class="" src="" alt="" /> -->
        <div class="canvas"></div>
      </div>
      <div class="me">
        <p class="card-name">Mina hollace</p>
        <p class="card-activity">/Freelance</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/partials/general" as *;
@use "../../assets/scss/partials/variables" as *;

.testimonial-card {
  width: 570px;
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
      width: 70px;
      aspect-ratio: 1;
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
