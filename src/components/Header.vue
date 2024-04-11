<script>
import { store } from "../data/store.js";
import Jumbotron from "./partials/Jumbotron.vue";
import Timer from "./partials/Timer.vue";
import HeaderNav from "./partials/HeaderNav.vue";
import HeaderSocial from "./partials/HeaderSocial.vue";
export default {
  components: {
    Jumbotron,
    Timer,
    HeaderNav,
    HeaderSocial,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <header>
    <!--* ticket countdown -->
    <!-- TODO: Da fare -->
    <div
      id="get-ticket"
      class="container-fluid d-flex justify-content-center align-items-center"
    >
      <Timer />
    </div>
    <!--* /ticket countdown -->
    <div id="menu" class="container-xxl">
      <!--% Mobile: 1 col (hamburger) - tablet: 2 col (tolgo social) - desktop: 3 col FULL-->
      <div class="row justify-content-between align-content-center">
        <!--! logo -->
        <div id="logo" class="col-3 d-flex">
          <div class="">
            <img
              class="align-items-center"
              src="../../../public/img/dark-logo.png"
              alt="MaxCoach"
            />
          </div>
        </div>
        <!--! /logo -->

        <!--? Dropdown menu -->
        <HeaderNav :navItem="store.navItem" />

        <!--? /Dropdown menu -->
        <!--* Social icon -->
        <div id="social" class="col-3 d-flex justify-content-end">
          <HeaderSocial :icon="store.social" />
        </div>
        <!--* /Social icon -->
      </div>
    </div>
  </header>
  <jumbotron />
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/general" as *;
@use "../assets/scss/partials/variables" as *;

// countdown ticket
#get-ticket {
  background-color: $color-hint-red;
  height: 50px;
  line-height: 50px;
}
#menu {
  line-height: 70px;
  // width: 100%;
  #logo {
    height: 100%;
    // justify-content: start;

    img {
      height: 26px;
      width: 160px;
    }
  }

  #social {
    line-height: 63px;
  }
}
// logo
</style>
