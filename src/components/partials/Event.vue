<script>
import { store } from "../../data/store.js";
import SectionTitle from "./SectionTitle.vue";
import EventCard from "./EventCard.vue";

export default {
  components: {
    SectionTitle,
    EventCard,
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
    <div class="container-xl">
      <SectionTitle :info="store.title.upcoming" />
      <EventCard />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/partials/general" as *;
@use "../../assets/scss/partials/variables" as *;
.container-xl {
  margin-top: 90px;
}
</style>
