<script>
import { store } from "../../data/store.js";
import BtnSecondary from "./BtnSecondary.vue";
export default {
  components: {
    BtnSecondary,
  },
  data() {
    return {
      store,
    };
  },

  computed: {
    myTimer() {
      return store.timer;
    },
  },
};
</script>
<template>
  <div class="d-flex justify-content-between ticket">
    <p>Starts TOMORROW! Our biggest event of the year...</p>
    <span class="me-2 ms-4"><i class="fa-regular fa-clock"></i></span>
    <span class="me-2">{{ myTimer.days }} :</span>
    <span class="me-2"> {{ myTimer.hours }} :</span>
    <span class="me-2"> {{ myTimer.min }} :</span>
    <span class="me-2"> {{ myTimer.sec }}</span>
    <div class="ms-3 btn-size">
      <BtnSecondary :btnContent="store.button.ticket" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/partials/general" as *;
@use "../../assets/scss/partials/variables" as *;
.ticket {
  height: 100%;
  p {
    color: $color-dusty-gray;
    font-size: 0.9em;
  }
  span {
    font-size: 1.2em;
    font-weight: bolder;
    color: #3f3a64;
  }
}
</style>
