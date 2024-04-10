<script>
import { store } from "../../data/store.js";
import SectionTitle from "./SectionTitle.vue";
import ArtistCard from "./ArtistCard.vue";
export default {
  components: {
    SectionTitle,
    ArtistCard,
  },
  data() {
    return {
      store,
    };
  },
};
</script>
<template>
  <div class="container-fluid">
    <div class="container-xxl">
      <!--* Titolo sezione -->
      <div class="title">
        <SectionTitle :info="store.title.artist" />
      </div>
      <!--? Stampa dinamica card -->
      <div class="row row-cols-4">
        <div
          class="col p-1 my-1"
          v-for="(element, index) in store.artistCard"
          :key="index"
        >
          <ArtistCard :item="element" />
        </div>
      </div>
    </div>
    <!-- TODO: AGGIUNGERE BTN -->
  </div>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/partials/general" as *;
@use "../../assets/scss/partials/variables" as *;

.container-xxl {
  margin-top: 60px;

  // .art {
  //   margin: 0 3px;
  // }
}
</style>
