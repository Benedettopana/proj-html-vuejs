<script>
import { store } from "./../../data/store.js";
import Instagram from "./Instagram.vue";
export default {
  components: {
    Instagram,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div class="container-xxl footer-info">
    <div
      class="row row-cols-1 row-cols-sm-2 row-cols-md-3 justify-content-center align-content-center"
    >
      <div id="address" class="col">
        <h5 class="mb-3">{{ store.address.title }}</h5>
        <p v-for="(element, index) in store.address.info" :key="index">
          <span>{{ element }}</span>
        </p>
        <p>
          <span
            class="icon"
            v-for="(item, index) in store.socialFooter"
            :key="index"
          >
            <a :href="item.iconLink" target="_blank"
              ><i :class="item.icon"></i
            ></a>
          </span>
        </p>
      </div>

      <div id="info-explore" class="col">
        <div class="row row-cols-1 row-cols-md-2 justify-content-between">
          <!--? Explore -->
          <div class="col">
            <h5 class="mb-3">{{ store.exploreFooter.title }}</h5>
            <p
              class="explore"
              v-for="(item, index) in store.exploreFooter.items"
              :key="index"
            >
              <a href="#">{{ item }}</a>
            </p>
          </div>
          <!--? Information -->
          <div class="col">
            <h5 class="mb-3">{{ store.informationFooter.title }}</h5>
            <p
              class="information"
              v-for="(item, index) in store.informationFooter.items"
              :key="index"
            >
              <a href="#">{{ item }}</a>
            </p>
          </div>
        </div>
      </div>

      <div id="latest-post" class="col">
        <Instagram />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@use "../../assets/scss/partials/general" as *;
@use "../../assets/scss/partials/variables" as *;

.footer-info {
  height: 480px;

  .row {
    height: 100%;
  }
  #address {
    & h5 {
      font-size: 1.1em;
      font-weight: 800;
    }

    .icon {
      margin-right: 30px;
      font-size: 1.5em;
    }
  }
  & span,
  .explore,
  .information {
    font-size: 0.85em;
    color: $color-boulder;
  }
}
</style>
