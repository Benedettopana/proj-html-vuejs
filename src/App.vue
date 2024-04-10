<script>
import { store } from "./data/store";
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
import Footer from "./components/Footer.vue";
import { computed } from "vue";
import Actions from "./components/partials/Actions.vue";
import BacktoTop from "./components/partials/BacktoTop.vue";

// import {store} from './data/store';

export default {
  components: {
    Header,
    Main,
    Footer,
    Actions,
    BacktoTop,
  },

  data() {
    return {
      store,
    };
  },

  methods: {
    myTimer() {
      setInterval(() => {
        store.timer.sec--;
        if (store.timer.sec == 0) {
          store.timer.sec = 60;
          store.timer.min--;
          if (store.timer.min == 0) {
            store.timer.min = 60;
            store.timer.hours--;
            if (store.timer.hours == 0) {
              store.timer.hours = 24;
              store.timer.days--;
              if (store.timer.days == 0) {
                // RESET
                store.timer.days = 104;
                store.timer.hours = 11;
                store.timer.min = 34;
                store.timer.sec = 42;
              }
            }
          }
        }
        console.log(store.timer);
      }, 1000);
    },
  },

  mounted() {
    this.myTimer();
  },
};
</script>

<template>
  <Header />
  <BacktoTop />
  <Actions />
  <Main />
  <Footer />
</template>

<style lang="scss">
@use "./assets/scss/main.scss";
</style>
