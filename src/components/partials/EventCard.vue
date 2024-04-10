<script>
import { store } from "../../data/store.js";
export default {
  // props: {
  //   item: Object,
  // },
  data() {
    return {
      store,
      imgPath: "../../../../public/img/event/",
    };
  },
};
</script>
<template>
  <div class="row row-cols-2">
    <div class="col" v-for="(item, index) in store.event" :key="index">
      <div class="card-event" v-for="(element, index) in item" :key="index">
        <div
          class="d-flex single-event"
          :class="index != 0 ? 'flex-row-reverse' : ''"
        >
          <div class="">
            <img :src="`${imgPath}${element.img}`" :alt="`${element.title}`" />
          </div>
          <div class="desc">
            <p class="element-style">{{ element.date }}</p>
            <p>{{ element.title }}</p>
            <p class="element-style">
              <i :class="element.icon"></i> {{ element.location }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/partials/general" as *;
@use "../../assets/scss/partials/variables" as *;

.single-event {
  margin-top: 67px;
  .desc {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 100px;
    flex-wrap: wrap-reverse;
    .element-style {
      font-size: 0.9em;
      color: $color-dusty-gray;
    }
  }
}
</style>
