<script>
import { store } from "../../data/store.js";
import SectionTitle from "./SectionTitle.vue";
import ArtistCard from "./ArtistCard.vue";
import BtnPrimary from "./BtnPrimary.vue";
export default {
  components: {
    SectionTitle,
    ArtistCard,
    BtnPrimary,
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
    <div class="mb-5 d-flex justify-content-center">
      <BtnPrimary :btnContent="store.button.artist" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/partials/general" as *;
@use "../../assets/scss/partials/variables" as *;

.container-xxl {
  margin-top: 60px;
  margin-bottom: 88px;
  // .art {
  //   margin: 0 3px;
  // }
}
</style>
