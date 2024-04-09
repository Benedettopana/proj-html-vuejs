<script>
import { store } from "../../data/store.js";
import CoachBG from "./CoachBG.vue";
import SectionTitle from "./SectionTitle.vue";

export default {
  components: {
    CoachBG,
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
  <section id="coach" class="container-fluid">
    <CoachBG />
    <div class="title"></div>
    <SectionTitle :info="store.title.coaching" />
  </section>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/partials/general" as *;
@use "../../assets/scss/partials/variables" as *;
#coach {
  margin-top: 75px;
}
</style>
