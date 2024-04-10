<script>
import { store } from "../../data/store.js";
import SectionTitle from "./SectionTitle.vue";
import ArticleCard from "./ArticleCard.vue";

export default {
  components: {
    SectionTitle,
    ArticleCard,
  },
  props: {},
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div id="articles" class="container-fluid">
    <!-- TODO: BG -->
    <div class="container-xl">
      <div class="title">
        <SectionTitle :info="store.title.article" />
      </div>
      <ArticleCard />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/partials/general" as *;
@use "../../assets/scss/partials/variables" as *;

#articles {
  background-color: $color-bg-articles;

  .container-xl {
    .title {
      padding-top: 45px;
    }
    padding-bottom: 195px;
  }
}
</style>
