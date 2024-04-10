<script>
import { store } from "../data/store.js";
import Jumbotron from "./partials/Jumbotron.vue";
import Timer from "./partials/Timer.vue";
export default {
  components: {
    Jumbotron,
    Timer,
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
      <!-- <div class="btn">Get Ticket</div> -->
    </div>
    <!--* ticket countdown -->
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

        <!--! TODO: Da far diventare un component -->
        <!-- TODO: Stampa dinamica -->
        <!--? Dropdown menu -->
        <nav id="drop-menu" class="col-6 d-flex justify-content-center">
          <ul class="nav">
            <!--% item navbar -->
            <li
              class="nav-item active dropdown"
              v-for="(element, index) in store.navItem"
              :key="index"
            >
              <a
                class="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
                aria-expanded="false"
                >{{ element.title }}</a
              >
              <!-- TODO: migliorare grafica + cambio chevron -->
              <!--% azioni dropdown -->
              <ul class="dropdown-menu">
                <li v-for="(item, index) in element.action" :key="index">
                  <a class="dropdown-item" :href="`${item.linkAction}`">{{
                    item.titleAction
                  }}</a>
                </li>

                <!-- <li><a class="dropdown-item" href="#">Another action</a></li>
                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
                <li><hr class="dropdown-divider" /></li>
                <li><a class="dropdown-item" href="#">Separated link</a></li> -->
              </ul>
              <!--% azioni dropdown -->
            </li>
          </ul>
        </nav>
        <!--! TODO: Da far diventare un component -->
        <!-- TODO: Stampa dinamica -->
        <!--? /Dropdown menu -->
        <!--* Social icon -->
        <div id="social" class="col-3 d-flex justify-content-end">
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-facebook-f"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-linkedin"></i>
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
  // dropdown menu
  #drop-menu {
    font-size: 1em;
    color: $color-cod-gray;
  }
  // social menu
  #social {
    line-height: 63px;
    i {
      align-content: center;
      color: $color-boulder;
      // color: $color-dusty-gray;
      font-size: 1.1em;
      margin: 0 0.7em;
    }
  }
}
// logo
</style>
