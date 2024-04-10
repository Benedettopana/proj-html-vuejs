<script>
import { store } from "../data/store";
import Coach from "./partials/Coach.vue";
import Carousel from "./partials/Carousel.vue";
import SectionTitle from "./partials/SectionTitle.vue";
import Artist from "./partials/Artist.vue";
import Articles from "./partials/Articles.vue";
export default {
  components: {
    Coach,
    Carousel,
    SectionTitle,
    Artist,
    Articles,
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
      <carousel />
    </div>
  </div>
  <Artist />
  <Articles />
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/general" as *;
@use "../assets/scss/partials/variables" as *;

#slider {
  padding: 100px;
  background-color: #faf8f6;
}
</style>
