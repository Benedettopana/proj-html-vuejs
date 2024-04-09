<script>
import { store } from "../../data/store.js";
import SectionTitle from "./SectionTitle.vue";
import BtnPrimary from "./BtnPrimary.vue";
export default {
  components: {
    SectionTitle,
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
  <div class="hero-get-started">
    <div class="d-flex flex-column justify-content-center align-items-center">
      <!-- <img
        src="../../../../public/img/jumbotron/hello-hero-rossela-script-1.png"
        alt=""
      />
      <h2 class="mb-5">Artist Coaching And Mentoring Might Be for You</h2> -->
      <SectionTitle :info="store.title.jumbo" />
      <BtnPrimary :btnContent="store.button.jumbo" />
      <!-- <button id="hero-btn" type="button" class="btn btn-primary">
        Get started today
      </button> -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/partials/general" as *;
@use "../../assets/scss/partials/variables" as *;

.hero-get-started {
  // height: 100%;
  width: 100%;
  z-index: 20;
  // Posizionamento
  position: absolute;
  bottom: 235px;
  // /Posizionamento
  img {
    height: 73px;
    width: 283px;
  }

  h2 {
    // font-size: ;
    text-align: center;
    font-weight: bolder;
    font-size: 2.2em;
    // padding: 0 10px;
    line-height: 50px;
    width: 574px;
  }

  #hero-btn {
    width: 200px;
    height: 50px;
    font-weight: 800;
    background-color: $color-tussock-tag;
    // Sovrascrivo Bootstrap
    --bs-btn-font-size: 0.8em !important;
    --bs-btn-border-color: none !important;
  }
}
</style>
