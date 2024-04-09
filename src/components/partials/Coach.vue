<script>
import { store } from "../../data/store.js";
import CoachBG from "./CoachBG.vue";
import SectionTitle from "./SectionTitle.vue";
import Point from "./Point.vue";
import Citation from "./Citation.vue";
import Yt from "./Ytcoach.vue";

export default {
  components: {
    CoachBG,
    SectionTitle,
    Point,
    Citation,
    Yt,
  },
  data() {
    return {
      store,
    };
  },
};
</script>
<template>
  <section id="coach" class="container-fluid">
    <!--% Dynamic BG -->
    <CoachBG />
    <!--* Title -->
    <div class="title"><SectionTitle :info="store.title.coaching" /></div>
    <!--? Coaching point -->
    <Point :elem="store.point" />
    <Citation />
    <div class="yt">
      <Yt />
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/partials/general" as *;
@use "../../assets/scss/partials/variables" as *;
#coach {
  margin-top: 75px;
  .yt {
    position: relative;
    width: 100%;
    height: 720px;
  }
}
</style>
