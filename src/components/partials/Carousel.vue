<script>
import { store } from "../../data/store";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

// import "./style.css";

// import required modules
import { Pagination } from "swiper/modules";
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination],
    };
  },
  data() {
    return {
      store,
    };
  },
};
</script>
<template>
  <div class="mySplider">
    <div class="swiper-wrapper text-center">
      <swiper
        :slidesPerView="3"
        :spaceBetween="30"
        :centeredSlides="true"
        :pagination="{
          clickable: true,
        }"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide>
          <div>
            <p class="sub-title">
              High level of efficiency and scientific teaching methods
            </p>
            <h2 class="title">
              I am free to learn at my own pace, follow my own schedule and
              choose the subject I want to learn from
            </h2>
            <div class="card mb-3" style="max-width: 540px">
              <div class="row g-0">
                <div class="col-md-4 square">
                  <!-- <img
                    src="/img/testimonial-avata-03.jpg"
                    class="img-fluid rounded-circle"
                    alt="..."
                  /> -->
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h6 class="card-title text-uppercase">Florence Themes</h6>
                    <p class="card-text">
                      <small class="text-body-secondary">/Free Lancer</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
        <swiper-slide>Slide 4</swiper-slide>
        <swiper-slide>Slide 5</swiper-slide>
        <swiper-slide>Slide 6</swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/partials/general" as *;
@use "../../assets/scss/partials/variables" as *;

.mySlider {
  margin-top: 200px;
  height: 600px;
  width: 100%;
}
</style>
