<script>
import { store } from "../data/store";
import Coach from "./partials/Coach.vue";
import Carousel from "./partials/Carousel.vue";
import SectionTitle from "./partials/SectionTitle.vue";
export default {
  components: {
    Coach,
    Carousel,
    SectionTitle,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <Coach />
  <div id="slider" class="container-fluid">
    <div class="testimonials mb-2">
      <SectionTitle :info="store.title.testimonals" />
    </div>
    <carousel />
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/general" as *;
@use "../assets/scss/partials/variables" as *;

#slider {
  padding-top: 100px;
  background-color: #faf8f6;
}
</style>
