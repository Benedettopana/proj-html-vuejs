<script>
import { store } from "./../../data/store.js";
export default {
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
      class="row row-cols-1 row-cols-sm-2 row-cols-md-3 justify-content-center align-items-center"
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
            <!-- TODO: TOGLIERE Style link -->
            <a :href="item.iconLink" target="_blank"
              ><i :class="item.icon"></i
            ></a>
          </span>
        </p>
      </div>

      <div id="info-explore" class="col">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque cum
        hic, accusantium tempore dolores alias porro doloremque eos ducimus
        architecto, in quis voluptatem facere accusamus beatae repellendus
        cumque eius eveniet?
      </div>

      <div id="latest-post" class="col">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi laudantium
        alias et a distinctio delectus quasi optio non maiores repudiandae aut
        officiis dolor unde est cumque corporis doloremque, expedita culpa.
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

    & span {
      font-size: 0.85em;
      color: $color-boulder;
    }
    .icon {
      margin-right: 30px;
      font-size: 1.5em;
    }
  }
}
</style>
