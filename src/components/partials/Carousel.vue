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
import TestimonialCard from "./TestimonialCard.vue";
export default {
  components: {
    Swiper,
    SwiperSlide,
    TestimonialCard,
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
        <swiper-slide
          v-for="(element, index) in store.testimonals"
          :key="index"
        >
          <TestimonialCard :info="element" />
        </swiper-slide>
        <!-- <swiper-slide> Prova {{ index }} </swiper-slide> -->
      </swiper>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/partials/general" as *;
@use "../../assets/scss/partials/variables" as *;

.mySlider {
  margin-top: 200px;
  // margin-bottom: 500px;
  // height: 600px;
  width: 100%;
}
</style>
